"use client";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ModeToggle } from "./toggle-mode";

const Header = () => {
  return (
    <div className="h-fit w-full flex justify-between items-center py-1 px-2 md:px-6 shadow-soft fixed bg-background z-50">
      {/* display logo here */}
      <div>
        <strong className="italic text-brand md:text-xl md:tracking-wide">
          Orion
        </strong>
      </div>
      {/* display menu bar here */}
      <div className="hidden md:inline">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger
              className="md:text-sm"
              onClick={() =>
                document
                  .getElementById("features-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Tính năng
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              className="md:text-sm"
              onClick={() =>
                document
                  .getElementById("spec-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Thông số
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              className="md:text-sm"
              onClick={() =>
                document
                  .getElementById("social-proof")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Đánh giá
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      {/* display buttons here */}
      <div className="flex flex-row justify-center items-center gap-3">
        <ModeToggle />
        <Button size={"icon"} variant={"outline"} className="rounded-lg">
          <MdOutlineAddShoppingCart className="h-[1.2rem] w-[1.2rem] md:h-[1.4rem] md:w-[1.4rem]" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
