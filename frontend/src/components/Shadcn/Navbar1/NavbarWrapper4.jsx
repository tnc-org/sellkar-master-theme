"use client";

import { useEffect, useState } from "react";
import { Navbar4 } from "./navbar4";


export default function NavbarWrapper4() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    // Set initial state
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-black/90 shadow-md translate-y-0" : "bg-transparent translate-y-0"}
      `}
    >
      <Navbar4
        menu={[
          { title: "HOME", url: "/" },
          { title: "SHOP", url: "/shop" },
          { title: "PRODUCTS", url: "/products" },
          { title: "CONTACT", url: "/contactus" },
        ]}
        auth={{
          login: { title: "Login", url: "/login" },
          signup: { title: "Sign Up", url: "/signup" },
        }}
      />
    </div>
  );
}