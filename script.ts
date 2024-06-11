import { PrismaClient, Role } from "@prisma/client";
import {
  findUniqueUser1,
  findUniqueUserWithAutoAttribute,
  findFirstWithName,
  findPaginatedUsers,
  findAllUserExceptSally,
  findUsersInNameList,
  findUsersWithEmailContainsTest,
  findAllUsersEmailStartWithEmily,
  findWithAnd,
  findWithRelationship,
  listAllUsers,
  findUsersUnder20ExceptThangAndSally,
  findManyWithRole,
} from "./find";
import {
  createMultiUserWithSameName,
  createSimpleUser,
  createUserWithIncludeUserPreference,
  createUserWithSelectedUserPreference,
} from "./create";
import { prisma } from "./client";
import {
  updateManyOnRole,
  updateSingleUser,
  updateWithIncrement,
} from "./update";

async function deleteAllUsers() {
  console.log("Delete all users...");
  const users = await prisma.user.deleteMany();
  return users;
}

async function deleteAllUserPreferences() {
  console.log("Delete all user preferences...");
  const userPreferences = await prisma.userPreference.deleteMany();
  return userPreferences;
}

async function main() {
  await deleteAllUsers();
  await deleteAllUserPreferences();
  await createSimpleUser();
  await createUserWithIncludeUserPreference();
  await createUserWithSelectedUserPreference();
  await listAllUsers();
  await findUniqueUser1();
  await findUniqueUserWithAutoAttribute();
  await findFirstWithName("Alice");
  await findManyWithRole("ADMIN");
  await createMultiUserWithSameName();
  await findPaginatedUsers();
  await findAllUserExceptSally();
  await findUsersInNameList();
  await findUsersUnder20ExceptThangAndSally();
  await findUsersWithEmailContainsTest();
  await findAllUsersEmailStartWithEmily();
  await findWithAnd();
  await findWithRelationship();
  await updateSingleUser();
  await updateManyOnRole();
  await updateWithIncrement();
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
