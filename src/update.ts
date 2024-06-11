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

export async function updateWithCreatingForeignEntry() {
  const user = await prisma.user.update({
    where: {
      email: "sally@test2.com",
    },
    data: {
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      email: true,
      age: true,
      userPreference: true,
    },
  });
  console.log("updateWithCreatingForeignEntry: ", user);
  return user;
}

export async function updateWithExistingUserPreference() {
  let user = await prisma.user.findUnique({
    where: {
      email: "sally@test2.com",
    },
  });
  const preferenceId = user?.userPreferenceId!;
  user = await prisma.user.update({
    where: {
      email: "sally@abc.com",
    },
    data: {
      userPreference: {
        connect: {
          id: preferenceId,
        },
      },
    },
    include: {
      userPreference: true,
    },
  });
  console.log("updateWithExistingUserPreference: ", user);
  return user;
}

export async function disconnectForeignKey() {
  const previousUser = await prisma.user.findUnique({
    where: {
      email: "sally@abc.com",
    },
  });
  const user = await prisma.user.update({
    where: {
      email: "sally@abc.com",
    },
    data: {
      userPreference: {
        disconnect: {
          id: previousUser?.userPreferenceId!,
        },
      },
    },
    include: {
      userPreference: true,
    },
  });
  console.log("disconnectForeignKey: ", user);
  return user;
}
