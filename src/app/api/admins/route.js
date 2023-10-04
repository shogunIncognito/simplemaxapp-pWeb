import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { validateToken } from '@/utils/functions'
import { headers } from 'next/headers'

export async function GET () {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const admins = await prisma.admin.findMany({ select: { id: true, name: true, cedula: true } })
    return NextResponse.json(admins)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const body = await request.json()

    const existAdmin = await prisma.admin.findFirst({ where: { name: body.name } })

    if (existAdmin) return NextResponse.json({ message: 'Admin already exists' }, { status: 400 })

    const newAdmin = await prisma.admin.create({
      data: {
        ...body,
        password: await bcrypt.hash(body.password, 10)
      }
    })

    return NextResponse.json(newAdmin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
