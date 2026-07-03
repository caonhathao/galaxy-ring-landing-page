"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";
import { m } from "framer-motion";
import { MdOutlineEnergySavingsLeaf, MdOutlineTouchApp } from "react-icons/md";
import { SiGoogleassistant } from "react-icons/si";

const cardContent = [
  {
    title: "Theo Dõi Sức Khỏe Chủ Động",
    icon: SiGoogleassistant,
    desc: "Tự động quét và phân tích nhịp tim, nồng độ oxy, mức độ căng thẳng liên tục, đưa ra cảnh báo sớm trước khi cơ thể lên tiếng.",
  },
  {
    title: "Tương Tác Không Giới Hạn",
    icon: MdOutlineTouchApp,
    desc: "Vuốt nhẹ cạnh nhẫn để chuyển nhạc, từ chối cuộc gọi hoặc điều khiển các thiết bị Smarthome trong nhà mà không cần chạm vào điện thoại.",
  },
  {
    title: "Chu kỳ Năng lượng Quantum",
    icon: MdOutlineEnergySavingsLeaf,
    desc: "Công nghệ pin thể rắn siêu đậm đặc. Chỉ với 30 phút sạc không dây, chiếc nhẫn sẵn sàng đồng hành cùng bạn suốt 10 ngày đêm liên tục.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features-section"
      className="h-full w-full lg:max-w-7xl lg:mx-auto px-3 py-5 mt-5"
    >
      <m.div
        className="flex flex-col justify-center items-center gap-2"
        variants={staggerContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <m.h2
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-center"
          variants={fadeInUpVariants}
        >
          Tuyệt Tác Công Nghệ Trên Ngón Tay Bạn
        </m.h2>
        <m.div variants={fadeInUpVariants}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 2,
            }}
            className="w-full max-w-66 md:max-w-2xl lg:max-w-5xl"
          >
            <CarouselContent>
              {cardContent.map((item, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card size="sm" className="w-full h-full rounded-md ">
                      <CardHeader>
                        <CardTitle className="h-14 flex flex-row justify-center items-center gap-5 font-semibold md:text-lg">
                          <item.icon size={20} />
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className=" md:text-lg">
                        {item.desc}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:hidden" />
            <CarouselNext className="lg:hidden" />
          </Carousel>
        </m.div>
      </m.div>
    </section>
  );
};
export default FeatureSection;
