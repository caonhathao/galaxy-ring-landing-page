"use client";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Vang from "../../../public/img/samsung-galaxy-ring-vang.jpg";
import { motion } from "framer-motion";
import SkeletonImage from "@/components/custom/skeleton-img";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-full w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center gap-2 px-3 py-5 mt-10"
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-2 text-center md:text-left font-bold md:col-span-1"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <motion.h1 className="w-full text-brand text-2xl md:text-3xl" variants={fadeInUpVariants}>
          Orion
        </motion.h1>

        <motion.h2 className="text-2xl md:text-3xl" variants={fadeInUpVariants}>
          Không chỉ là một chiếc nhẫn
          <br />
          Vĩnh hằng. Vô tận. Vượt mọi giới hạn.
        </motion.h2>

        <motion.p
          className="pl-3 pr-3 md:pr-5 md:pl-0 text-sm md:text-lg md:leading-7 font-normal text-muted-foreground"
          variants={fadeInUpVariants}
        >
          Chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học
          thế hệ mới. Theo dõi sức khỏe chủ động, điều khiển không gian sống chỉ
          bằng một cái chạm.
        </motion.p>

        <motion.div
          variants={fadeInUpVariants}
          className="w-full flex justify-center mt-2"
        >
          <Button className="min-h-11 rounded-full py-2 btn-gold w-4/5 md:max-w-xs">
            Đặt trước ngay
            <FaArrowRightLong />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
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
          className="w-full h-60 md:h-80 rounded-md mt-4"
          variants={fadeInUpVariants}
          fill
          loading="eager"
          src={Vang}
          alt="galaxy-vang"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
