"use client";
import { useEffect, useState } from "react";
import { Navbar3 } from "./navbar3";

//header centered logo
export default function NavbarWrapper3() {
  const [mode, setMode] = useState("top"); 
 

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

     
      if (y <= 5) {
        setMode("top");
        return;
      }

     
      if (mode === "top" && y > 5) {
        setMode("hiding");

        
        setTimeout(() => {
          setMode("fixed");
        }, 400); 
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  return (
    <div
      className={`
        z-50
        transition-all duration-[1200ms] 
        ease-[cubic-bezier(0.33,1,0.68,1)]

        ${mode === "top" ? "relative translate-y-0 opacity-100" : ""}
        ${mode === "hiding" ? "-translate-y-full opacity-0" : ""}
        ${mode === "fixed" ? "fixed top-0 left-0 w-full bg-white shadow-lg translate-y-0 opacity-100" : ""}
      `}
    >
      <Navbar3
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
