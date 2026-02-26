'use client';

import { usePathname } from 'next/navigation';
import Headers from "@/components/Headers/Header_Drawer";
import Footer3 from "@/components/Shadcn/Footer3/Footer3";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Define routes where header and footer should be hidden
  const hideLayout = ['/login', '/signup'].includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && (
        <header>
          <Headers />
        </header>
      )}

      <main className="flex-1">{children}</main>

      {!hideLayout && (
        <footer>
          <Footer3 />
        </footer>
      )}
    </div>
  );
}