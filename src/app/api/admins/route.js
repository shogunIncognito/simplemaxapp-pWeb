import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function GET () {
  try {
    const admins = await prisma.admin.findMany()
    return NextResponse.json(admins)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
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
