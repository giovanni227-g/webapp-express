import prisma from '../lib/prisma.js'

export async function index(req, res) {
  const services = await prisma.service.findMany()
  res.json(services)
}

export async function show(req, res) {
  const serviceId = Number(req.params.id)
  const service = await prisma.service.findUnique({
    where: { id: serviceId }
  })
  res.json(service)
}

export async function store(req, res) {
  const { name, description, priceCents, durationMin, categoryId } = req.body
  const newService = await prisma.service.create({
    data: { name, description, priceCents, durationMin, categoryId }
  })
  res.status(201).json(newService)
}

export async function update(req, res) {
  const serviceId = Number(req.params.id)
  const { name, description, priceCents, durationMin, categoryId } = req.body
  const updatedService = await prisma.service.update({
    where: { id: serviceId },
    data: { name, description, priceCents, durationMin, categoryId }
  })
  res.status(200).json(updatedService)
}

export async function destroy(req, res) {
  const serviceId = Number(req.params.id)
  const deletedService = await prisma.service.delete({
    where: { id: serviceId }
  })
  res.status(204).json(deletedService)
}
