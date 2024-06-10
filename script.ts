import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.$connect();
  // .. you will write your queries here
  /*const user = await prisma.user.create({
    data: {
      name: "Alice",
    },
  });*/
  // const users = await prisma.user.findMany();
  const users = await prisma.user.deleteMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //optional, prisma automatically disconnects anyway
    await prisma.$disconnect();
    process.exit(0);
  });
