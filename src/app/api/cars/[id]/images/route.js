import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function PUT (request, { params }) {
  const body = await request.json()

  console.log(body)

  const car = await prisma.car.findUnique({ where: { id: Number(params.id) } })

  if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

  const imagesFiltered = car.image.split('&&&').filter(img => img !== body.url)

  await prisma.car.update({ where: { id: Number(params.id) }, data: { image: imagesFiltered.join('&&&') } })

  return NextResponse.json({ imagesFiltered })
}
