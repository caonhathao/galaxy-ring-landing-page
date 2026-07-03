import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Vang from "../../../public/img/samsung-galaxy-ring-vang.webp";
import SkeletonImage from "@/components/custom/skeleton-img";
import { fadeInUpVariants } from "@/lib/motion/animations";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-full w-full lg:max-w-7xl lg:mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center gap-2 lg:gap-12 px-3 py-5 mt-10 lg:mt-15"
    >
      <div className="flex flex-col justify-center items-center gap-2 text-center md:text-left md:col-span-1 font-bold">
        <h1 className="w-full text-brand text-2xl md:text-3xl lg:text-6xl">
          Orion
        </h1>

        <h2 className="w-full text-2xl md:text-3xl lg:text-4xl">
          Không chỉ là một chiếc nhẫn
          <br />
          Vĩnh hằng. Vô tận. Vượt mọi giới hạn.
        </h2>

        <p className="pl-3 pr-3 md:pr-5 md:pl-0 text-sm md:text-lg md:leading-7 font-normal text-muted-foreground">
          Chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học
          thế hệ mới. Theo dõi sức khỏe chủ động, điều khiển không gian sống chỉ
          bằng một cái chạ
        </p>

        <div className="w-full flex justify-center lg:justify-start mt-2">
          <Button className="min-h-11 lg:w-auto lg:p-5 rounded-full py-2 btn-gold w-4/5 md:max-w-xs lg:text-lg hover:opacity-90">
            Đặt trước ngay
            <FaArrowRightLong />
          </Button>
        </div>
      </div>

      <div className="w-full">
        <SkeletonImage
          className="w-full h-60 md:h-90 aspect-square bg-muted-foreground rounded-md mt-4 lg:mt-0"
          variants={fadeInUpVariants}
          fill
          src={Vang}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="galaxy-vang"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
