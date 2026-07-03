import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .nonempty({ message: "NEXT_PUBLIC_SITE_URL is required" }),
  GOOGLE_SHEET_ID_DEPLOY: z
    .string()
    .nonempty({ message: "GOOGLE_SHEET_ID_DEPLOY is required" }),
});

const envServer = envSchema.safeParse(process.env);

if (!envServer.success) {
  console.error("Invalid environment variables:", envServer.error.format());
  throw new Error("Invalid environment variables");
}

const envData = envServer.data;

export const EnvConfig = {
  siteUrl: envData.NEXT_PUBLIC_SITE_URL,
  googleSheetIdDeploy: envData.GOOGLE_SHEET_ID_DEPLOY,
} as const;
