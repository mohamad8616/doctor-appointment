import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "../../prisma/prisma";

export const auth = betterAuth({
  database: {
    provider: prismaAdapter(prisma, {
      provider: "postgresql",
    }),
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [nextCookies()],
});
