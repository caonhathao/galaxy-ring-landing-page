"use client";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Vang from "../../../public/img/samsung-galaxy-ring-vang.webp";
import { m } from "framer-motion";
import SkeletonImage from "@/components/custom/skeleton-img";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-full w-full lg:max-w-7xl lg:mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center gap-2 lg:gap-12 px-3 py-5 mt-10 lg:mt-15"
    >
      <m.div
        className="flex flex-col justify-center items-center gap-2 text-center md:text-left md:col-span-1 font-bold"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <m.h1
          className="w-full text-brand text-2xl md:text-3xl lg:text-6xl"
          variants={fadeInUpVariants}
        >
          Orion
        </m.h1>

        <m.h2
          className="w-full text-2xl md:text-3xl lg:text-4xl"
          variants={fadeInUpVariants}
        >
          Không chỉ là một chiếc nhẫn
          <br />
          Vĩnh hằng. Vô tận. Vượt mọi giới hạn.
        </m.h2>

        <m.p
          className="pl-3 pr-3 md:pr-5 md:pl-0 text-sm md:text-lg md:leading-7 font-normal text-muted-foreground"
          variants={fadeInUpVariants}
        >
          Chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học
          thế hệ mới. Theo dõi sức khỏe chủ động, điều khiển không gian sống chỉ
          bằng một cái chạm.
        </m.p>

        <m.div
          variants={fadeInUpVariants}
          className="w-full flex justify-center lg:justify-start mt-2"
        >
          <Button className="min-h-11 lg:w-auto lg:p-5 rounded-full py-2 btn-gold w-4/5 md:max-w-xs lg:text-lg hover:opacity-90">
            Đặt trước ngay
            <FaArrowRightLong />
          </Button>
        </m.div>
      </m.div>

      <m.div
        className="w-full"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <SkeletonImage
          className="w-full h-60 md:h-80 aspect-square bg-muted-foreground rounded-md mt-4 lg:mt-0"
          variants={fadeInUpVariants}
          fill
          loading={"eager"}
          src={Vang}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
          alt="galaxy-vang"
        />
      </m.div>
    </section>
  );
};

export default HeroSection;
