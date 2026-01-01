"use server";

import { signUp } from "./auth-client";

export async function credentialsRegister({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) {
  try {
    const result = await signUp.email({
      email,
      password,
      name,     
    });
    return result;
    console.log(result);
  } catch (error) {
    console.error(error);
    return { error: "خطا در ثبت نام" };
  }
}
