import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Vang from "../../../public/img/samsung-galaxy-ring-vang.jpg";

const HeroSection = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-2 my-3 p-2">
      {/* display slo-gan here */}
      <div className="flex flex-col justify-center items-center gap-2 text-center font-bold">
        <p className="text-brand">Orion</p>
        <p>
          Không chỉ là một chiếc nhẫn
          <br />
          Vĩnh hằng. Vô tận. Vượt mọi giới hạn.
        </p>
        <p className="px-3 text-sm font-normal text-zinc-500 ">
          Chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học
          thế hệ mới. Theo dõi sức khỏe chủ động, điều khiển không gian sống chỉ
          bằng một cái chạm.
        </p>
      </div>
      <Button variant={"outline"} className="rounded-radius py-2 btn-gold">
        Đặt trước
        <FaArrowRightLong />
      </Button>
      {/* display image here */}
      <div className="relative w-full h-60">
        <Image
          className="rounded-md border-l-2 border-t-2 border-gold object-cover"
          fill
          src={Vang}
          alt="galaxy-vang"
        />
      </div>
    </section>
  );
};

export default HeroSection;
