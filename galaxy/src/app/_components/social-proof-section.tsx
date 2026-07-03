"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
const cardContent = [
  {
    customer: "Hoàng Hiệp \n(Kỹ sư phần mềm)",
    avatar: "https://github.com/maxleiter.png",
    review:
      "Tôi quên mất là mình đang đeo nhẫn vì nó quá nhẹ. Khả năng phân tích giấc ngủ bằng AI chuẩn xác một cách kinh ngạc!",
  },
  {
    customer: "Anh Thư \n(Nhân viên văn phòng)",
    avatar: "https://github.com/evilrabbit.png",
    review:
      "Tôi có thể điều khiển các thiết bị trong nhà mà không cần chạm vào điện thoại. Thật tiện lợi!",
  },
  {
    customer: "Minh Tuấn \n(Vận động viên thể thao)",
    avatar: "https://github.com/shadcn.png",
    review:
      " Chiếc nhẫn này giúp tôi theo dõi nhịp tim và mức độ căng thẳng trong quá trình tập luyện. Tôi cảm thấy an tâm hơn khi luyện tập.",
  },
  {
    customer: "Hồng Phấn \n(Giáo viên về hưu)",
    avatar: "",
    review:
      "Chiến nhẫn này giúp tôi theo dõi sức khỏe và nhịp tim của mình một cách dễ dàng. Tôi cảm thấy yên tâm hơn khi đi dạo hay tập thể dục. Orion đã thật sự tạo ra được một sản phẩm thiết thực, hữu ích trong việc theo dõi sức khỏe người dùng.",
  },
];

const SocialProofSection = () => {
  return (
    <motion.section
      id="social-proof"
      className="h-full w-full flex flex-col justify-center items-center gap-2 px-2 py-5 mt-5 bg-card"
      variants={staggerContainerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      <motion.h2
        className="font-bold text-2xl md:text-3xl"
        variants={fadeInUpVariants}
      >
        Nhận Xét Từ Khách Hàng
      </motion.h2>
      <motion.div variants={fadeInUpVariants}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              stopOnInteraction: true,
              stopOnMouseEnter: true,
              playOnInit: true,
            }),
          ]}
          className="w-full max-w-64 sm:max-w-4/5 mx-auto"
        >
          <CarouselContent>
            {cardContent.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/2">
                <div className="p-1 h-full">
                  <Card size="sm" className="w-full h-full rounded-sm">
                    <CardHeader className="flex flex-row justify-start items-center gap-2">
                      <Avatar size="lg">
                        <AvatarImage src={item.avatar} alt={item.customer} />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <CardTitle className="flex items-center gap-5 whitespace-pre-line">
                        {item.customer}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="md:leading-7 italic">
                      &quot;{item.review}&quot;
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </motion.div>
    </motion.section>
  );
};
export default SocialProofSection;
