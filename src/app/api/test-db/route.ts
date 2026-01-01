// src/app/api/test-db/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET() {
  try {
    await prisma.$connect(); // Force connection
    const result = await prisma.$queryRaw`SELECT 1 AS ok`;
    console.log("Prisma connected successfully:", result);
    return NextResponse.json({ status: "Prisma OK", result });
  } catch (error: any) {
    console.error("Prisma connection error:", error);
    return NextResponse.json(
      { error: "Prisma failed", message: error.message, code: error.code },
      { status: 500 }
    );
  }
}
