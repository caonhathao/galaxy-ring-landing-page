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
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
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
import { m } from "framer-motion";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  RegisterFormData,
  registerFormSchema,
} from "@/lib/schemas/register-schema";

const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      size: "",
    },
  });

  function onSubmit(data: RegisterFormData) {
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
    <m.div
      variants={staggerContainerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      className="py-2"
    >
      <m.div
        variants={fadeInUpVariants}
        className="w-full flex justify-center items-center"
      >
        <Card className="w-full max-w-72 md:max-w-lg rounded-sm drop-shadow-gold shadow-card">
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
              <FieldGroup className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-3">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor="field-name-title"
                        className="lg:text-lg"
                      >
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
                      <FieldLabel
                        htmlFor="field-phone-title"
                        className="lg:text-lg"
                      >
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
                      <FieldLabel
                        htmlFor="field-email-title"
                        className="lg:text-lg"
                      >
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
                      <FieldLabel
                        htmlFor="field-email-title"
                        className="lg:text-lg"
                      >
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
                className="btn-gold px-1 py-2 lg:p-5 min-h-11 rounded-full w-4/5 md:w-1/2 lg:w-auto hover:opacity-90"
              >
                Đăng ký ngay
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </m.div>
    </m.div>
  );
};

export default RegisterForm;
