import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
// import { PrismaClient } from "./generated/client";

const connectionString = `${process.env.PRISMA_DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
// const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

export { prisma };
