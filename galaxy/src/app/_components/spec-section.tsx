import Image from "next/image";
import RingDen from "../../../public/img/samsung-galaxy-ring-den-1.jpg";
import RingDeo from "../../../public/img/galaxy-ring-silm1-pc.jpg";
import RingNuoc from "../../../public/img/Galaxy-Ring-specifications-and-information.webp";
import RingHealth from "../../../public/img/galaxy-ring-samsung-health-endframe-mo.jpg";

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
    title: "Theo dõi thông tin sức khỏe ở bất cứ đâu",
    desc: "Với khả năng kết nối Bluetooth 5.3, Orion Ring có thể kết nối với điện thoại của bạn ở khoảng cách lên đến 100 mét. Điều này có nghĩa là bạn có thể theo dõi thông tin sức khỏe của mình mà không cần phải mang điện thoại bên mình.",
    image: RingHealth,
  },
];

const SpecSection = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-2 my-3">
      {specContent.map((item, index) => (
        <section
          key={"spec-section" + index}
          className={`${index % 2 == 0 ? "bg-card" : "bg-accent"} p-2`}
        >
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <p className="font-bold text-2xl whitespace-pre-line">
              {item.title}
            </p>
            <p className="px-3 text-sm font-normal text-zinc-500">
              {item.desc}
            </p>
          </div>
          <Image
            src={item.image}
            alt="spec-image"
            className="rounded-sm mt-2"
          />
        </section>
      ))}
    </div>
  );
};
export default SpecSection;
