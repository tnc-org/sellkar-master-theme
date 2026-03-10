import React, { Suspense } from "react";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import { Jost } from "next/font/google";
import { headers } from "next/headers";

// import ThemeProvider from "@/provider/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Sellkar Themes",
  description: "A collection of themes for Sellkar stores.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function RootLayout({ children }) {

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;

  const res = await fetch(
    "https://master-api.sellkar.pk/api/v1/store?domain=https://test.sellkar.pk",
    // `https://master-api.sellkar.pk/api/v1/store?domain=${domain}`,
  );
  const store = await res.json();
  const backendTheme = store?.data?.themeId?.handle;

  // http://localhost:3000/?previewTheme=beauty
  // const defaultTheme = "time";

  return (
    <html>
      <body>
        <Suspense fallback={null}>
          <ClientWrapper>
            <AppLayout backendTheme={backendTheme}>{children}</AppLayout>
          </ClientWrapper>
        </Suspense>
      </body>
    </html>
  );
}
