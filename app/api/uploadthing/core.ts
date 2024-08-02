import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'

import { ratelimit } from '@/lib/rate-limit'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { OpenAIEmbeddings } from '@langchain/openai'
import { PineconeStore } from '@langchain/pinecone'
// import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
// import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { getPineconeClient } from '@/lib/pinecone'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { openai } from '@/lib/openai'

const f = createUploadthing()

// Fake auth function
async function auth(req: Request) {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return { id: 'fakeId' }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  imageUploader: f({
    image: { maxFileSize: '4MB', maxFileCount: 8 },
    pdf: { maxFileSize: '1024MB', maxFileCount: 1 },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // Rate limit the upload
      const ip = req.ip ?? '127.0.0.1'

      // const { success } = await ratelimit.limit(ip)

      // if (!success) {
      //   throw new UploadThingError('Rate limit exceeded')
      // }

      // This code runs on your server before upload
      // const user = await auth(req)

      // // If you throw, the user will not be able to upload
      // if (!user) throw new UploadThingError('Unauthorized')

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: '123' }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId)

      console.log('file url', file.url)

      const response = await fetch(
        `https://utfs.io/f/61a8c571-729c-48dc-a328-45f6cfbf9f5d-2gj.pdf`
      )

      try {
        const blob = await response.blob()
        const loader = new PDFLoader(blob)

        const pageLevelDocs = await loader.load()

        const textSplitter = new RecursiveCharacterTextSplitter({
          chunkSize: 1000,
          chunkOverlap: 200,
        })

        const docs = await textSplitter.splitDocuments(pageLevelDocs)
        console.log({ docs })

        const pineConeClient = await getPineconeClient()
        console.log({ docs })
        const listIndex = await pineConeClient.listIndexes()
        const index = await pineConeClient.Index('test')

        const embeddings = new OpenAIEmbeddings({
          openAIApiKey: process.env.OPENAI_API_KEY!,
        })
        await PineconeStore.fromDocuments(docs, embeddings, {
          pineconeIndex: index,
          namespace: 'test',
          textKey: 'text',
        })

        // const index = pineConeClient.Index('quill')
        // console.log({ index })
        // await PineconeStore.fromDocuments(docs, embeddings, {
        //   pineconeIndex: index,
        //   namespace: 'quill',
        //   textKey: 'text',
        // })
      } catch (error) {
        console.log({ error })
      }

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
