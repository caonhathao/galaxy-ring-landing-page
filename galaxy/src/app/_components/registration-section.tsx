"use client";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";
import { m } from "framer-motion";
import RegisterForm from "./register-form";

const RegistrationForm = () => {

  return (
    <section
      id="registration"
      className="h-full w-full lg:max-w-7xl lg:mx-auto px-3 py-5 mt-5 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-2"
    >
      <m.div
        className="py-2 flex flex-col justify-center items-center gap-2 text-center md:text-left"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <m.h2
          className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left"
          variants={fadeInUpVariants}
        >
          Trở Thành Những Người Đầu Tiên Sở Hữu
        </m.h2>
        <m.p
          className="pl-3 pr-3 md:pr-5 md:pl-0 text-sm lg:text-lg font-normal text-muted-foreground md:leading-7 md:text-left"
          variants={fadeInUpVariants}
        >
          Đăng kí pre-order ngay hôm nay để nhận ưu đãi giảm 15% và gói đặc
          quyền bảo hành VIP 2 năm từ Orion.
        </m.p>
      </m.div>

      <RegisterForm />
    </section>
  );
};
export default RegistrationForm;
