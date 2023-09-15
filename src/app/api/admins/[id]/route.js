import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export function GET (request, { params }) {
  try {
    const { id } = params
    const admin = prisma.admin.findUnique({ where: { id: Number(id) } })
    return NextResponse.json(admin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export function PUT (request, { params }) {
  try {
    const { id } = params
    const body = request.json()
    const updatedAdmin = prisma.admin.update({
      where: { id: Number(id) },
      data: body
    })
    return NextResponse.json(updatedAdmin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
