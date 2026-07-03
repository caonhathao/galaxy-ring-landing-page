import { Separator } from "@/components/ui/separator";
import Youtube from "../../../public/youtube.svg";
import Facebook from "../../../public/facebook.svg";
import TikTok from "../../../public/tiktok.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" w-full px-2 py-5 md:px-8 border-t shadow bg-card flex justify-center items-center"
    >
      <div className="w-full max-w-sm md:max-w-full lg:max-w-7xl flex flex-col justify-center items-center md:flex-row md:justify-between gap-3">
        <div className="w-full text-sm text-muted-foreground">
          <p>
            @ 2026 ORION Project. <br />
            Developed by Cao Nhat Hao
          </p>
          <p>Email: caonhathao2372004@gmail.com</p>
          <p>Hotline: (+84) 365-848-597</p>
        </div>
        <Separator className="md:hidden"/>
        <div className="w-full flex flex-col justify-center items-center  md:flex-row md:justify-end gap-2">
          <p className="break-keep text-sm text-muted-foreground">Kết nối với chúng tôi tại</p>
          <div className=" w-fit h-fit grid grid-cols-3 grid-rows-1 justify-center items-center gap-2">
            <Youtube className="w-10 h-fit" />
            <Facebook className="w-10 h-fit" />
            <TikTok className="w-10 h-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
