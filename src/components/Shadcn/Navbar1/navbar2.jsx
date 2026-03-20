"use client";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "./accordion";
import { Button } from "./button";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "./navigation-menu";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "./sheet";
import { HeartIcon, UserIcon } from "@/lib/icons";
import { useSelector } from "react-redux";
import CartDrawer from "@/components/CartDrawer/CartDrawer";
import { SearchBar } from "./Searchbar";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "../Tooltip/tooltip";
import { useRouter } from "next/navigation";

const Navbar2 = ({
  isLoggedIn = false,
  onLogout,
  userMenu = null,
  logo = {
    url: "",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Sellkar Theme",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products", url: "#",
      items: [
        { title: "Blog",    description: "The latest industry news, updates, and info",               icon: <Book className="size-5 shrink-0" />,   url: "#" },
        { title: "Company", description: "Our mission is to innovate and empower the world",          icon: <Trees className="size-5 shrink-0" />,  url: "#" },
        { title: "Careers", description: "Browse job listing and discover our workspace",             icon: <Sunset className="size-5 shrink-0" />, url: "#" },
        { title: "Support", description: "Get in touch with our support team or visit our community", icon: <Zap className="size-5 shrink-0" />,    url: "#" },
      ],
    },
    {
      title: "Resources", url: "#",
      items: [
        { title: "Help Center",      description: "Get all the answers you need right here",              icon: <Zap className="size-5 shrink-0" />,    url: "#" },
        { title: "Contact Us",       description: "We are here to help you with any questions you have",  icon: <Sunset className="size-5 shrink-0" />, url: "#" },
        { title: "Status",           description: "Check the current status of our services and APIs",    icon: <Trees className="size-5 shrink-0" />,  url: "#" },
        { title: "Terms of Service", description: "Our terms and conditions for using our services",      icon: <Book className="size-5 shrink-0" />,   url: "#" },
      ],
    },
    { title: "Pricing", url: "#" },
    { title: "Blog",    url: "#" },
  ],
  auth = {
    login:  { title: "Login",   url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}) => {
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const wishlistCount = wishlistItems.length;
  const router = useRouter();

  return (
    <section className="py-7 flex justify-center">
      <div className="container">

        {/* ── Desktop ────────────────────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Logo */}
          <div className="flex items-center">
            <a href={logo.url} className="flex items-center gap-2 cursor-pointer">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
            </a>
          </div>

          <TooltipProvider>
            <div className="flex gap-4 items-center">
              <SearchBar placeholder="Search products..." />

              {/* Wishlist */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => router.push("/wishlist")}
                    className="cursor-pointer relative"
                  >
                    <HeartIcon className="w-6 h-6" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent><p>Wishlist ({wishlistCount})</p></TooltipContent>
              </Tooltip>

              {/* Cart */}
              <Tooltip>
                <TooltipTrigger asChild><div className="cursor-pointer"><CartDrawer /></div></TooltipTrigger>
                <TooltipContent><p>Cart</p></TooltipContent>
              </Tooltip>

              {/* User */}
              {isLoggedIn ? (
                userMenu
              ) : (
                <Button asChild size="sm" className="cursor-pointer">
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
              )}

            </div>
          </TooltipProvider>
        </nav>

        {/* ── Mobile ─────────────────────────────────────────────────────── */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2 cursor-pointer">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2 cursor-pointer">
                      <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {isLoggedIn ? (
                      <>
                        <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                          {userMenu}
                        </div>
                        <Button
                          variant="outline"
                          onClick={onLogout}
                          className="text-red-500 border-red-200 hover:bg-red-50 cursor-pointer"
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button asChild className="cursor-pointer">
                        <a href={auth.login.url}>{auth.login.title}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="cursor-pointer">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline cursor-pointer">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold cursor-pointer">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }) => (
  <a
    className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors cursor-pointer"
    href={item.url}
  >
    <div className="text-foreground">{item.icon}</div>
    <div>
      <div className="text-sm font-semibold">{item.title}</div>
      {item.description && (
        <p className="text-muted-foreground text-sm leading-snug">{item.description}</p>
      )}
    </div>
  </a>
);

export { Navbar2 };








