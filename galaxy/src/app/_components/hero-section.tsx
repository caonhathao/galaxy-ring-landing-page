"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Vang from "../../../public/img/samsung-galaxy-ring-vang.jpg";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonImage } from "@/components/custom/skeleton-img";

const HeroSection = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <section
      id="hero-section"
      className="h-full w-full flex flex-col justify-center items-center gap-2 px-3 py-5"
    >
      {/* display slo-gan here */}
      <div className="flex flex-col justify-center items-center gap-2 text-center font-bold">
        <p className="text-brand text-2xl">Orion</p>
        <p className="text-2xl">
          Không chỉ là một chiếc nhẫn
          <br />
          Vĩnh hằng. Vô tận. Vượt mọi giới hạn.
        </p>
        <p className="px-3 text-sm font-normal text-muted-foreground">
          Chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học
          thế hệ mới. Theo dõi sức khỏe chủ động, điều khiển không gian sống chỉ
          bằng một cái chạm.
        </p>
      </div>
      <Button className="min-h-11 rounded-full py-2 btn-gold w-4/5">
        Đặt trước ngay
        <FaArrowRightLong />
      </Button>
      {/* display image here */}
      <SkeletonImage
        className="w-full h-60 rounded-md"
        fill
        loading="eager"
        src={Vang}
        alt="galaxy-vang"
      />
    </section>
  );
};

export default HeroSection;
