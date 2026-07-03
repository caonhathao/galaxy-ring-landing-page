"use client";
import RingDen from "../../../public/img/samsung-galaxy-ring-den-1.webp";
import RingDeo from "../../../public/img/galaxy-ring-silm1-pc.webp";
import RingNuoc from "../../../public/img/Galaxy-Ring-specifications-and-information.webp";
import RingHealth from "../../../public/img/galaxy-ring-samsung-health-endframe-mo.webp";
import SkeletonImage from "@/components/custom/skeleton-img";
import { m } from "framer-motion";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/motion/animations";

const specContent = [
  {
    title: "Chất liệu vỏ đặc biệt",
    desc: "Sử dụng Titanium chuẩn hàng không vũ trụ. Mang lại sự bền bỉ và nhẹ nhàng, giúp mang lại cảm giác đeo thoải mái và an tâm.",
    image: RingDen,
  },
  {
    title: "Mỏng, nhẹ.\n Ôm gọn ngón tay, bất kể ngày đêm",
    desc: "Với trọng lượng chỉ 2.1 gram, dù bạn đang gõ phím, nấu ăn hay đang ngủ, chiếc nhẫn vẫn luôn ôm trọn ngón tay của bạn, thoải mái đến nỗi bạn sẽ quên đi sự tồn tại của nó.",
    image: RingDeo,
  },
  {
    title: "Kháng nước chuẩn 10 ATM",
    desc: "Không cần phải tháo nhẫn nữa, bạn hoàn toàn có thể mang nó đi tắm, đi bơi hay đi biển, tất cả đều được.\n Orion Ring được trang bị chỉ số kháng nước 10 ATM - điều này có nghĩa là chiếc nhẫn sẽ tiếp tục dõi theo bạn kể cả khi bạn đang bơi!",
    image: RingNuoc,
  },
  {
    title: "Theo dõi thông tin sức khỏe thông minh",
    desc: "Với khả năng kết nối Bluetooth 5.3 và tích hợp AI, Orion Ring có thể kết nối với điện thoại của bạn ở khoảng cách lên đến 100 mét. Điều này có nghĩa là bạn có thể theo dõi thông tin sức khỏe của mình mà không cần phải mang điện thoại bên mình.",
    image: RingHealth,
  },
];

const SpecSection = () => {
  return (
    <div
      id="spec-section"
      className="h-full w-full flex flex-col justify-center items-center gap-2"
    >
      {specContent.map((item, index) => (
        <m.section
          key={"spec-section" + index}
          className={`${index % 2 == 0 ? "bg-card" : "bg-accent"} px-3 py-10 w-full lg:max-w-7xl lg:mx-auto md:grid md:grid-cols-2 md:grid-rows-1 md:gap-5`}
          variants={staggerContainerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: false,
            amount: 0.2,
          }}
        >
          <m.div
            className={`flex flex-col justify-center items-center gap-2 text-center md:text-left ${index % 2 == 0 ? "order-1" : "order-2"}`}
            variants={fadeInUpVariants}
          >
            <h2 className="w-full font-bold text-2xl md:text-3xl lg:text-4xl whitespace-pre-line">
              {item.title}
            </h2>
            <p className="pl-3 pr-3 md:pr-5 md:pl-0 text-sm lg:text-lg font-normal text-muted-foreground md:leading-7">
              {item.desc}
            </p>
          </m.div>
          <m.div variants={fadeInUpVariants} className={`${index % 2 == 0 ? "order-2" : "order-1"}`}>
            <SkeletonImage
              className={`w-full h-auto aspect-square ${index % 2 == 0 ? "bg-card" : "bg-accent"} rounded-sm mt-2 flex justify-center items-center`}
              src={item.image}
              alt="spec-image"
              loading="lazy"
            
            />
          </m.div>
        </m.section>
      ))}
    </div>
  );
};
export default SpecSection;
