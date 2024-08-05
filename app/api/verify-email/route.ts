import { db } from '../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // extract parameters
    const { token } = body

    //

    // remove the user from the database
    return NextResponse.json(
      { message: 'User created successfully', user },
      { status: 201 }
    )
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[REGISTER ERROR]', err)
    return new NextResponse('internal error', { status: 400 })
  }
}
