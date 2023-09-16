import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST (request) {
  try {
    const body = await request.json()

    const existAdmin = await prisma.admin.findFirst({
      where: {
        name: body.name
      }
    })

    if (!existAdmin) return NextResponse.json({ message: 'Admin not found' }, { status: 404 })

    const passwordMatch = await bcrypt.compare(body.password, existAdmin.password)

    if (!passwordMatch) return NextResponse.json({ message: 'Password does not match' }, { status: 400 })

    return NextResponse.json({
      token: crypto.randomUUID()
    })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
