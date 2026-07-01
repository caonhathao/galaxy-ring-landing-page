import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="h-fit w-full flex justify-between items-center py-1 px-2 shadow-md">
      {/* display logo here */}
      <div>
        <strong className="italic text-brand">Orion</strong>
      </div>
      {/* display menu bar here */}
      <div className="hidden md:inline">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Tính năng</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Thông số</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Đánh giá</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      {/* display buttons here */}
      <div>
        <Button size={"icon-lg"} variant={"outline"}>
          <MdOutlineAddShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Header;
