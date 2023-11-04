import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function PUT (request, { params }) {
  const body = await request.json()

  const car = await prisma.car.findUnique({ where: { id: Number(params.id) } })

  if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 })

  const imagesFiltered = car.image.split('&&&').filter(img => img !== body.image)

  if (body.image === car.preview) {
    body.preview = imagesFiltered[0]
  }

  body.image = imagesFiltered.join('&&&')

  await prisma.car.update({ where: { id: Number(params.id) }, data: body })

  return NextResponse.json({ imagesFiltered })
}
