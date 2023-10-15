import { prisma } from '@/libs/prisma'
import { validateToken } from '@/utils/functions'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  try {
    const brand = await prisma.brands.findUnique({
      where: { id: Number(params.id) },
      include: {
        cars: true
      }
    })
    if (!brand) return NextResponse.json({ message: 'Brand not found' }, { status: 404 })

    return NextResponse.json(brand)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE (request, { params }) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const existBrand = await prisma.brands.findUnique({ where: { id: Number(params.id) } })
    if (!existBrand) return NextResponse.json({ message: 'Brand doesn`t exists' }, { status: 404 })

    await prisma.brands.delete({ where: { id: Number(params.id) } })

    return NextResponse.json({ message: 'Brand deleted' })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
