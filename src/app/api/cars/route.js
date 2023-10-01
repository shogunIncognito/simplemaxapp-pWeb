import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const cars = await prisma.car.findMany({
      include: {
        brand: true
      }
    })

    const carsWithBrand = cars.map(car => ({
      ...car,
      brand: car.brand.name
    }))

    return NextResponse.json(carsWithBrand)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
    const body = await request.json()

    const car = {
      ...body,
      brandId: Number(body.brandId)
    }

    const newCar = await prisma.car.create({ data: car })

    const newCarWithBrand = await prisma.car.findUnique({
      where: { id: newCar.id },
      include: {
        brand: true
      }
    })

    return NextResponse.json({ ...newCarWithBrand, brand: newCarWithBrand.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
