// import { db } from '@/db'
import { openai } from '@/lib/openai'
import { getPineconeClient } from '@/lib/pinecone'
// import { SendMessageValidator } from '@/lib/validators/SendMessageValidator'
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { OpenAIEmbeddings } from '@langchain/openai'
import { PineconeStore } from '@langchain/pinecone'
import { NextRequest, NextResponse } from 'next/server'

import { OpenAIStream, StreamingTextResponse, streamText } from 'ai'

export const POST = async (req: NextRequest, res: NextResponse) => {
  // endpoint for asking a question to a pdf file

  const body = await req.json()
  console.log({ body })

  // const { getUser } = getKindeServerSession()
  // const user = getUser()

  // const { id: userId } = user

  // if (!userId)
  //   return new Response('Unauthorized', { status: 401 })

  const { message } = body

  console.log({ message })
  // const file = await db.file.findFirst({
  //   where: {
  //     id: fileId,
  //     userId,
  //   },
  // })

  // if (!file)
  //   return new Response('Not found', { status: 404 })

  // await db.message.create({
  //   data: {
  //     text: message,
  //     isUserMessage: true,
  //     userId,
  //     fileId,
  //   },
  // })

  // 1: vectorize message
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  })

  const pinecone = await getPineconeClient()
  const pineconeIndex = pinecone.Index('test')

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: 'test',
  })

  const results = await vectorStore.similaritySearch(message, 10)

  // const prevMessages = await db.message.findMany({
  //   where: {
  //     fileId,
  //   },
  //   orderBy: {
  //     createdAt: 'asc',
  //   },
  //   take: 6,
  // })

  // const formattedPrevMessages = prevMessages.map((msg) => ({
  //   role: msg.isUserMessage ? ('user' as const) : ('assistant' as const),
  //   content: msg.text,
  // }))

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.',
      },
      {
        role: 'user',
        content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
 
  
  CONTEXT:
  ${results.map((r) => r.pageContent).join('\n\n')}
  
  USER INPUT: ${message}`,
      },
    ],
  })

  console.log({ response })

  const stream = OpenAIStream(response)
  // console.log({ stream }, new StreamingTextResponse(stream))

  return new StreamingTextResponse(stream)
}

export const GET = async (response: Response) => {
  return new Response('it works', { status: 404 })
}
