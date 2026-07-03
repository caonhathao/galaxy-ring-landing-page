import z from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập tên của bạn" }),
  email: z.string().email({ message: "Vui lòng nhập email hợp lệ" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại" }),
  size: z.string().min(1, { message: "Vui lòng chọn size nhẫn" }),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
