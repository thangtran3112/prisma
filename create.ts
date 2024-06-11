import { prisma } from "./client";

export async function createSimpleUser() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      age: 12,
      email: "abc@test.com",
      info: {
        testField: "test",
      },
    },
  });
  console.log("createSimpleUser: ", user);
  return user;
}

export async function createMultiUserWithSameName() {
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Sally",
        age: 12,
        email: "sally@test1.com",
        info: {
          testField: "test",
        },
      },
      {
        name: "Sally",
        age: 20,
        email: "sally@test2.com",
        info: {
          testField: "test",
        },
      },
      {
        name: "Sally",
        age: 32,
        email: "sally@abc.com",
        info: {
          testField: "test",
        },
      },
    ],
  });

  const user = await prisma.user.findMany({
    where: {
      name: "Sally",
    },
    distinct: ["name"], //find fisrt user with name Sally, if more than 1
  });
  console.log("findMany with same distinct name of Sally: ", user);

  await prisma.user.findMany({
    where: {
      name: "Sally",
    },
    distinct: ["name", "age"], //find fisrt user with name Sally, if more than 1
  });
  console.log("findMany with same distinct name-age: ", user);
}

export async function createUserWithSelectedUserPreference() {
  const user = await prisma.user.create({
    data: {
      name: "Tram",
      age: 32,
      email: "tram@baby.com",
      // UserPreference table will be created automatically
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
      info: {
        husband: "Thang",
      },
      role: "ADMIN",
    },
    select: {
      name: true,
      userPreference: { select: { id: true, emailUpdates: true } },
    },
  });
  console.log("createUserWithSelectedUserPreference: ", user);
  return user;
}

export async function createUserWithIncludeUserPreference() {
  const user = await prisma.user.create({
    data: {
      name: "Emily",
      age: 4,
      email: "emily@baby.com",
      // UserPreference table will be created automatically
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
      info: {
        daddy: "Thang",
      },
    },
    include: {
      userPreference: true,
    },
  });
  console.log("createUserWithIncludeUserPreference: ", user);
  return user;
}
