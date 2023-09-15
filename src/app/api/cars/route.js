import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const cars = await prisma.car.findMany()
    return NextResponse.json(cars)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
    const body = await request.json()
    const newCar = await prisma.car.create({ data: body })
    return NextResponse.json(newCar)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
