"use client";

import { useTheme } from "@/provider/theme-provider";
import { HeaderMap } from "./Headers";
import { FooterMap } from "./Footers";

export default function InnerLayout({ children }) {
  const {theme, themeId} = useTheme(); // ✅ SAFE
const DEFAULT_HEADER = "header_drawer"
  const Header = HeaderMap[theme.header] || HeaderMap[DEFAULT_HEADER];
    const Footer = FooterMap[theme.footer];

  return (
    <>
      {Header && <Header />}
      <main>{children}</main>
      {Footer && <Footer />}
    </>
  );
}
