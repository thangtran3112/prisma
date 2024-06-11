import { PrismaClient } from "@prisma/client";

//use a singleton client to avoid creating too many connections
export const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });
