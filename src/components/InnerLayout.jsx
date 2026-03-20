"use client";

import { useTheme } from "@/provider/theme-provider";
import { HeaderMap } from "./Headers";
import { FooterMap } from "./Footers";
import { usePathname } from "next/navigation";

export default function InnerLayout({ children }) {
  const { theme } = useTheme();
  const pathname  = usePathname();


  const isAuthPage = pathname?.startsWith('/auth');

  const DEFAULT_HEADER = "header_drawer";
  const Header = HeaderMap[theme.header] || HeaderMap[DEFAULT_HEADER];
  const Footer = FooterMap[theme.footer];

  return (
    <>
      {!isAuthPage && Header && <Header />}
      <main>{children}</main>
      {!isAuthPage && Footer && <Footer />}
    </>
  );
}