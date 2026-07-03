"use server";
import {
  RegisterFormData,
  registerFormSchema,
} from "@/lib/schemas/register-schema";
import { EnvConfig } from "@/lib/env/env-config.lib";

export async function registerUser(data: RegisterFormData) {
  const parsed = registerFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten() };
  }

  const idDeploy = EnvConfig.googleSheetIdDeploy;
  console.log("id:", idDeploy);
  const apiUrl = `https://script.google.com/macros/s/${idDeploy}/exec`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // console.log(response);
    const result = await response.json();
    return result;
  } catch (err) {
    return JSON.stringify(err);
  }
}
