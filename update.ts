import { prisma } from "./client";

export async function updateSingleUser() {
  const user = await prisma.user.update({
    where: {
      email: "sally@test1.com",
    },
    data: {
      email: "sally@test6.com",
    },
    include: {
      userPreference: true,
    },
  });
  console.log("updateSingleUser: ", user);
  return user;
}

export async function updateManyOnRole() {
  const users = await prisma.user.updateMany({
    where: {
      role: "BASIC",
    },
    data: {
      role: "EDITOR",
    },
  });
  console.log(`updateManyOnRole: updated ${users.count} `, users);
  return users;
}

export async function updateWithIncrement() {
  const user = await prisma.user.update({
    where: {
      email: "sally@test2.com",
    },
    data: {
      age: {
        increment: 1,
        //multiply, divide, decrement
      },
    },
  });
  console.log("updateWithIncrement: ", user);
  return user;
}
