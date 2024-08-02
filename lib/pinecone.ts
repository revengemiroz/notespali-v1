import { Pinecone } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const pineConeClient = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })

  return pineConeClient
}
