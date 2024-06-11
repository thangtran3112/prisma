import { prisma } from "./client";

export async function deleteUniqueUser() {
  const user = await prisma.user.delete({
    where: {
      email: "sally@abc.com",
    },
  });
  console.log("deleteUniqueUser: ", user);
  return user;
}

export async function deleteAllSallyUsers() {
  const users = await prisma.user.deleteMany({
    where: {
      name: "Sally",
    },
  });
  console.log("deleteAllSallyUsers: ", users);
  return users;
}

export async function deleteAllUsersHigherAgeThan20() {
  const users = await prisma.user.deleteMany({
    where: {
      age: {
        gt: 20,
      },
    },
  });
  console.log("deleteAllUsersHigherAgeThan20: matched", users);
  return users;
}
