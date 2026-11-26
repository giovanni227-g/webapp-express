import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const ponte = new PrismaMariaDb(process.env.DATABASE_URL)
const prisma = new PrismaClient({ adapter: ponte })
export default prisma
