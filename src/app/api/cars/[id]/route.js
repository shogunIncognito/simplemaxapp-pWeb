import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  try {
    const { id } = params
    const car = await prisma.car.findUnique({ where: { id: Number(id) }, include: { brand: true } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json({ ...car, brand: car.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE (request, { params }) {
  try {
    const { id } = params
    const car = await prisma.car.delete({ where: { id: Number(id) } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json(car)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function PUT (request, { params }) {
  try {
    const { id } = params
    const body = await request.json()

    const car = await prisma.car.update({ where: { id: Number(id) }, data: body, include: { brand: true } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json({ ...car, brand: car.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
