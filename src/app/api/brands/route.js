import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const brands = await prisma.brands.findMany({
      include: {
        cars: true
      }
    })
    return NextResponse.json(brands)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
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
