import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
  const users = await prisma.moodChange.findMany()

  console.log(users)

}

export function test() {
  main()


}