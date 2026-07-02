"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập tên của bạn" }),
  email: z.email({ message: "Vui lòng nhập email hợp lệ" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại" }),
  size: z.string().min(1, { message: "Vui lòng chọn size nhẫn" }),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      size: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }
  return (
    <section id="registration" className="h-full w-full px-3 py-5">
      <motion.div
        className="flex flex-col justify-center items-center gap-2 text-center"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <motion.p className="font-bold text-2xl" variants={fadeInUpVariants}>
          Trở Thành Những Người Đầu Tiên Sở Hữu
        </motion.p>
        <motion.p
          className="px-3 text-sm font-normal text-muted-foreground"
          variants={fadeInUpVariants}
        >
          Đăng kí pre-order ngay hôm nay để nhận ưu đãi giảm 15% và gói đặc
          quyền bảo hành VIP 2 năm từ Orion.
        </motion.p>
        <motion.div variants={fadeInUpVariants} className="w-full flex justify-center items-center">
          <Card className="w-full max-w-72 rounded-sm drop-shadow-gold">
            <CardHeader>
              <CardTitle className="font-bold text-lg text-center">
                Đăng Ký Đặt Trước
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                id="form-rhf-demo"
                onSubmit={form.handleSubmit(onSubmit)}
                className="h-full w-full"
              >
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="field-name-title">
                          Họ và Tên
                        </FieldLabel>
                        <Input
                          {...field}
                          id="field-name-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Họ và tên của bạn"
                          autoComplete="off"
                          className="p-2 h-full min-h-11"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="field-phone-title">
                          Số điện thoại
                        </FieldLabel>
                        <Input
                          {...field}
                          id="field-phone-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Số điện thoại liên hệ"
                          autoComplete="off"
                          className="p-2 h-full min-h-11"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="field-email-title">
                          Email
                        </FieldLabel>
                        <Input
                          {...field}
                          id="field-email-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Địa chỉ email để nhận thông báo"
                          autoComplete="email"
                          type="email"
                          className="p-2 h-full min-h-11"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="size"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="field-email-title">
                          Kích thước vòng nhẫn
                        </FieldLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="p-2 w-full min-h-11">
                            <SelectValue placeholder="Chọn size" />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={4}>
                            <SelectGroup>
                              <SelectLabel>Size nhẫn</SelectLabel>
                              {Array.from({ length: 8 }, (_, i) => (
                                <SelectItem key={i} value={(i + 6).toString()}>
                                  Size {i + 6}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter>
              <Field
                orientation="horizontal"
                className="w-full flex flex-row justify-center items-center gap-3"
              >
                <Button
                  type="submit"
                  size={"lg"}
                  form="form-rhf-demo"
                  className="btn-gold px-1 py-2 min-h-11 rounded-full w-4/5"
                >
                  Đăng ký ngay
                </Button>
              </Field>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default RegistrationForm;
