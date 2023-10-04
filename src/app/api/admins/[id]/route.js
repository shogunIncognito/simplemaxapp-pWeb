import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { headers } from 'next/headers'
import { validateToken } from '@/utils/functions'

export async function GET (request, { params }) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const { id } = params
    const admin = await prisma.admin.findUnique({ where: { id: Number(id) } })
    return NextResponse.json(admin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function PUT (request, { params }) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const { id } = params
    const body = await request.json()

    if (body.password) body.password = await bcrypt.hash(body.password, 10)

    const updatedAdmin = await prisma.admin.update({
      where: { id: Number(id) },
      data: body
    })

    return NextResponse.json(updatedAdmin)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE (request, { params }) {
  try {
    const { id } = params
    const deletedAdmin = await prisma.admin.delete({ where: { id: Number(id) } })

    return NextResponse.json(deletedAdmin)
  } catch (error) {
    if (error.code === 'P2025') return NextResponse.json({ message: 'Admin not found' }, { status: 404 })
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
