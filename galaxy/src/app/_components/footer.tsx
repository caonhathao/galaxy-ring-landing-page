import { Separator } from "@/components/ui/separator";
import Youtube from "../../../public/youtube.svg";
import Facebook from "../../../public/facebook.svg";
import TikTok from "../../../public/tiktok.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" w-full px-2 py-1 border-t shadow mt-5 bg-card"
    >
      <div className="w-full max-w-sm flex flex-col justify-center items-center gap-3">
        <div className="w-full text-sm text-muted-foreground">
          <p>
            @ 2026 ORION Project. <br />
            Developed by Cao Nhat Hao
          </p>
          <p>Email: caonhathao2372004@gmail.com</p>
          <p>Hotline: (+84) 365-848-597</p>
        </div>
        <Separator />
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <p className="text-sm text-muted-foreground">Kết nối với chúng tôi tại</p>
          <div className=" w-full h-fit flex flex-row justify-center items-center gap-2">
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
