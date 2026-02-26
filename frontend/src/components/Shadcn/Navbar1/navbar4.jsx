"use client";

import { useState } from "react";
import { HeartIcon, UserIcon } from "@/lib/icons";
import { useSelector } from "react-redux";
import CartDrawer from "@/components/CartDrawer/CartDrawer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip/tooltip";
import { useRouter } from "next/navigation";
import MenuDrawer from "../MenuDrawer/drawer-left-2";
import { SearchBar } from "./Searchbar";

const Navbar4 = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Sellkar Theme",
  },
  menu = [],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}) => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const wishlistCount = wishlistItems.length;

  return (
    <section className="px-4 py-8 w-full">
      <div className="container mx-auto">

        {/* Desktop */}
        <nav className="hidden lg:grid grid-cols-3 items-center">

          {/* Left — Menu Drawer */}
          <div className="flex items-center">
            <div className="text-white">
              <MenuDrawer color={"white"} />
            </div>
          </div>

          {/* Center — Logo */}
          <div className="flex justify-center">
            <a href={logo.url || "/"} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 brightness-0 invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter text-white">
                {logo.title}
              </span>
            </a>
          </div>

          {/* Right — Icons */}
          <TooltipProvider>
            <div className="flex gap-5 items-center justify-end">
            
            <div className="text-white">
            <SearchBar placeholder="Search products..." />
            </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => router.push("/login")}
                    className="cursor-pointer text-white hover:opacity-75 transition-opacity"
                  >
                    <UserIcon className="w-6 h-6 text-white stroke-white" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => router.push("/wishlist")}
                    className="cursor-pointer relative text-white hover:opacity-75 transition-opacity"
                  >
                    <HeartIcon className="w-6 h-6 text-white stroke-white" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Wishlist ({wishlistCount})</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip open={isCartOpen ? false : undefined}>
                <TooltipTrigger asChild>
                  <div className="text-white">
                    <CartDrawer onOpenChange={setIsCartOpen} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cart</p>
                </TooltipContent>
              </Tooltip>

            </div>
          </TooltipProvider>
        </nav>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between">

          {/* Left — Drawer */}
          <div className="text-white">
            <MenuDrawer color={"white"} />
          </div>

          {/* Center — Logo */}
          <a href={logo.url || "/"} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 brightness-0 invert"
              alt={logo.alt}
            />
            <span className="text-sm font-semibold tracking-tighter text-white">
              {logo.title}
            </span>
          </a>

          {/* Right — Cart only on mobile */}
          <TooltipProvider>
            <div className="flex gap-3 items-center text-white">
              <CartDrawer onOpenChange={setIsCartOpen} />
            </div>
          </TooltipProvider>

        </div>
      </div>
    </section>
  );
};

export { Navbar4 };