"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from "@/components/Shadcn/MenuDrawer/drawer";
import AnimatedButton from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MenuDrawer = ({color}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigation = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      {/* MENU ICON BUTTON */}
      <DrawerTrigger asChild>
        <button className="p-0 bg-transparent border-none" aria-label="Open menu">
          <Menu className={`h-6 w-6 text-${color || 'black'} cursor-pointer`} />
        </button>
      </DrawerTrigger>

      {/* DRAWER */}
      <DrawerContent className="bg-black text-white !border-r-0 w-full sm:w-96 md:w-[400px] lg:w-[450px]">
        {/* Hidden accessibility title and description */}
        <VisuallyHidden>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Main navigation menu with links to home, shop, products, and contact pages
          </DrawerDescription>
        </VisuallyHidden>

        <div className="h-full flex flex-col">
          
          {/* CLOSE BUTTON - Top Right */}
          <div className="flex justify-end p-4 sm:p-6">
            <DrawerClose asChild>
              <button 
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </DrawerClose>
          </div>

          {/* MENU CONTENT */}
          <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-8 gap-4 sm:gap-5 pb-8">

            {/* HOME */}
            <AnimatedButton
              text="HOME"
              textColor="text-white"
              onClick={() => handleNavigation("/")}
            />
            <Separator className="bg-gray-700 w-full" />

            {/* SHOP */}
            <AnimatedButton
              text="SHOP"
              textColor="text-white"
              onClick={() => handleNavigation("/shop")}
            />
            <Separator className="bg-gray-700 w-full" />

            {/* PRODUCTS */}
            <AnimatedButton
              text="PRODUCTS"
              textColor="text-white"
              onClick={() => handleNavigation("/products")}
            />
            <Separator className="bg-gray-700 w-full" />

            {/* CONTACT */}
            <AnimatedButton
              text="CONTACT"
              textColor="text-white"
              onClick={() => handleNavigation("/contactus")}
            />

            <Separator className="bg-gray-700 w-full my-2 sm:my-4" />

            {/* SEARCH */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 py-2 w-full bg-transparent border border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-400"
                aria-label="Search products"
              />
            </div>

            <Separator className="bg-gray-700 w-full my-2 sm:my-4" />

            {/* SIGN UP */}
            <AnimatedButton
              text="SIGN UP"
              bgColor="bg-white"
              textColor="text-black"
              hoverBgColor="hover:bg-gray-200"
              rounded="rounded-full"
              padding="px-8 sm:px-10"
              className="self-center w-full sm:w-auto"
              onClick={() => handleNavigation("/signup")}
            />

          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;