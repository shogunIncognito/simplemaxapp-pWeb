import { prisma } from '@/libs/prisma'
import { validateToken } from '@/utils/functions'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  try {
    const { id } = params
    const car = await prisma.car.findUnique({ where: { id: Number(id) }, include: { brand: true } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json({ ...car, brand: car.brand.name, image: car.image.split('&&&') })
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

    const carToUpdate = await prisma.car.findUnique({ where: { id: Number(id) } })

    if (body.image && carToUpdate.image) {
      body.image = body.image + '&&&' + carToUpdate.image
    }

    const car = await prisma.car.update({ where: { id: Number(id) }, data: body, include: { brand: true } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json({ ...car, brand: car.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function PATCH (request, { params }) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const { id } = params
    const { preview } = await request.json()

    const car = await prisma.car.update({ where: { id: Number(id) }, data: { preview }, include: { brand: true } })

    if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

    return NextResponse.json({ ...car, brand: car.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
