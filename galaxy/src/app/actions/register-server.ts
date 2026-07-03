"use server";
import {
  RegisterFormData,
  registerFormSchema,
} from "@/lib/schemas/register-schema";

async function registerUser(data: RegisterFormData) {
  const parsed = registerFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten() };
  }

  return { success: true };
}
