import { prisma } from '@/libs/prisma'
import { validateToken } from '@/utils/functions'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const brands = await prisma.brands.findMany()
    return NextResponse.json(brands)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const { name } = await request.json()

    const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    const existBrand = await prisma.brands.findFirst({ where: { name } })
    if (existBrand) return NextResponse.json({ message: 'Brand already exists' }, { status: 400 })

    const newBrand = await prisma.brands.create({ data: { name: formatName } })
    return NextResponse.json(newBrand)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
