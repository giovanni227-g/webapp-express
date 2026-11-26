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
