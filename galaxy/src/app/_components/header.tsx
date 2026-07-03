"use client";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ModeToggle } from "./toggle-mode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="h-fit w-full flex justify-between items-center py-1 px-2 md:px-6 shadow-soft fixed bg-background z-50">
      <div className="w-full lg:w-7xl lg:mx-auto flex justify-between items-center gap-3">
        {/* display logo here */}
        <strong className="bg-linear-to-br from-[#b58b55] via-gold to-[#efd39e] bg-clip-text text-transparent md:text-xl lg:text-4xl md:tracking-wide m-0">
          ORION
        </strong>
        {/* display menu bar on tablet devices or above*/}
        <div className="h-full hidden md:flex md:justify-center md:items-center m-0">
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger
                className="md:text-sm lg:text-lg px-1 py-2"
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
                className="md:text-sm lg:text-lg px-1 py-2"
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
                className="md:text-sm lg:text-lg px-1 py-2"
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
          {/* display on mobile devices at a button */}
          <div className="md:hidden flex justify-center items-center">
            <DropdownMenu onOpenChange={(open) => setIsExpanded(open)}>
              <DropdownMenuTrigger>
                <div className="relative flex items-center justify-center size-5">
                  <RxHamburgerMenu
                    className={`absolute transition-all duration-300 ${
                      isExpanded ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`}
                  />
                  <IoIosArrowDown
                    className={`absolute transition-all duration-300 ${
                      isExpanded
                        ? "scale-100 opacity-100 rotate-360"
                        : "scale-0 opacity-0"
                    }`}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() =>
                      document
                        .getElementById("features-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Tính năng
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="md:text-sm lg:text-lg px-1 py-2"
                    onClick={() =>
                      document
                        .getElementById("spec-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Thông số
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      document
                        .getElementById("social-proof")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Đánh giá
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ModeToggle />
          <Button size={"icon-lg"} variant={"outline"} className="rounded-lg">
            <MdOutlineAddShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
