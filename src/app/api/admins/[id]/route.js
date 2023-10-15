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

    const url = new URL(request.url)
    const type = url.searchParams.get('type')

    const { id } = params
    const body = await request.json()

    if (type === 'toUsername') {
      const existName = await prisma.admin.findFirst({ where: { name: body.username } })
      if (existName) return NextResponse.json({ message: 'Username already exists' }, { status: 400 })

      await prisma.admin.update({ where: { id: Number(id) }, data: { name: body.username } })

      return NextResponse.json({ message: 'Username updated' })
    }

    const existUser = await prisma.admin.findUnique({ where: { id: Number(id) } })
    if (!existUser) return NextResponse.json({ message: 'Admin not found' }, { status: 404 })

    const currentPasswordIsCorrect = await bcrypt.compare(body.currentPassword, existUser.password)
    if (!currentPasswordIsCorrect) return NextResponse.json({ message: 'Current password is incorrect' }, { status: 400 })

    const updatedAdmin = await prisma.admin.update({
      where: { id: Number(id) },
      data: {
        password: await bcrypt.hash(body.newPassword, 10)
      }
    })

    return NextResponse.json(updatedAdmin)
  } catch (error) {
    console.log(error.message)
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
