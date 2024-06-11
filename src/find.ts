import { Role } from "@prisma/client";
import { prisma } from "./client";

export const findPaginatedUsers = async () => {
  const users = await prisma.user.findMany({
    where: {
      name: "Sally",
    },
    orderBy: {
      age: "desc",
    },
    skip: 1,
    take: 2,
  });
  console.log("findPaginatedUsers: ", users);
  return users;
};

export async function findAllUserExceptSally() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        not: "Sally",
      },
    },
  });
  console.log(`findAllUserExceptSally: found ${users.length}`, users);
  return users;
}

export async function findUsersInNameList() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        in: ["Emily", "Tram"],
      },
    },
  });
  console.log(`findUsersInNameList: found ${users.length}`, users);
  return users;
}

export async function findUniqueUser1() {
  const user = await prisma.user.findUnique({
    where: {
      email: "emily@baby.com",
    },
  });
  console.log("findUniqueUser: ", user);
  return user;
}

export async function findUniqueUserWithAutoAttribute() {
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 32,
        name: "Tram",
      },
    },
  });
  console.log("findUniqueUser: ", user);
  return user;
}

export async function findFirstWithName(name: string) {
  const user = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });
  console.log(`findFirstWithName for name: ${name}: `, user);
  return user;
}

export async function findManyWithRole(role: Role) {
  const users = await prisma.user.findMany({
    where: {
      role: role,
    },
  });
  console.log(`findManyWithRole for role: ${role}: `, users);
  return users;
}

export async function listAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function findUsersUnder20ExceptThangAndSally() {
  const users = await prisma.user.findMany({
    where: {
      name: { notIn: ["Thang", "Sally"] },
      age: {
        lt: 20,
      },
    },
  });
  console.log(
    `findUsersUnder20ExceptThangAndSally: found ${users.length} users:`,
    users
  );

  return users;
}

export async function findUsersWithEmailContainsTest() {
  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: "test",
      },
    },
  });
  console.log(
    `findUsersWithEmailContainsTest: found ${users.length} users:`,
    users
  );
  return users;
}

export async function findAllUsersEmailStartWithEmily() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: "Emily",
      },
    },
  });
  console.log(
    `findAllUsersEmailStartWithEmily: found ${users.length} users:`,
    users
  );
  return users;
}

export async function findWithAnd() {
  const users = await prisma.user.findMany({
    where: {
      AND: [
        { email: { startsWith: "sally" } },
        { email: { endsWith: "@test2.com" } },
      ],
    },
  });
  console.log(`findWithAnd: found ${users.length}`, users);
  return users;
}

export async function findWithRelationship() {
  const users = await prisma.user.findMany({
    where: {
      writtenPosts: {
        every: {
          title: { contains: "test" },
        },
      },
    },
  });
  console.log(`findWithRelationship: found ${users.length}`, users);
  return users;
}

export async function findUserFromForeignTable() {
  const users = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 32,
        },
      },
    },
  });
  console.log(`findUserFromForeignTable: found ${users.length}`, users);
  return users;
}
