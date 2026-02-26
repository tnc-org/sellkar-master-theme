"use client";
import ThemeProvider from "@/provider/theme-provider";
import InnerLayout from "./InnerLayout";
import { useSearchParams } from "next/navigation";


export default function AppLayout({ children, backendTheme }) {
  const searchParams = useSearchParams();
  const previewTheme = searchParams.get("previewTheme");

  const themeId = previewTheme || backendTheme;

  return (
    <ThemeProvider themeId={themeId} previewTheme={previewTheme}>
      <InnerLayout>{children}</InnerLayout>
    </ThemeProvider>
  );
}
