import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelumi & Umesh | Save the Date",
  description: "Join Kelumi and Umesh on 25 November 2026 in Battaramulla.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#f8f6f0] font-[family-name:var(--editorial)] text-[#59594f]">
        {children}
      </body>
    </html>
  );
}
