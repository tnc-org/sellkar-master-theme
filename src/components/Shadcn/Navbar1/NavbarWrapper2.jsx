"use client";
import { useEffect, useState } from "react";
import { Navbar2 } from "./navbar2";
import { getToken, clearStorage } from "@/lib/utils/storage";
import { logout } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function NavbarWrapper2() {
  const [mode, setMode] = useState("top");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false); // ← added
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
    setIsReady(true); // ← mark ready after token check
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Logout error:", error?.response?.data);
    } finally {
      clearStorage();
      setIsLoggedIn(false);
      window.location.href = "/auth/signin"
      
    }
  };

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

  // ← don't render until token check is done
  if (!isReady) return null;

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
      <Navbar2
        menu={[
          { title: "HOME", url: "/" },
          { title: "SHOP", url: "/shop" },
          { title: "PRODUCTS", url: "/products" },
          { title: "CONTACT", url: "/contactus" },
        ]}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        auth={{
          login: { title: "Login", url: "/auth/login" },
          signup: { title: "Sign Up", url: "/auth/signup" },
        }}
      />
    </div>
  );
}