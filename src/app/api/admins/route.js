import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export function GET () {
  try {
    const admins = prisma.admin.findMany()
    return NextResponse.json(admins)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export function POST (request) {
  try {
    const body = request.json()
    const newAdmin = prisma.admin.create({ data: body })
    return NextResponse.json(newAdmin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
