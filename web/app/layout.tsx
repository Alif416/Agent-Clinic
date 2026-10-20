import type { Metadata } from "next";
import { CLINIC_NAME } from "@agent-clinic/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: CLINIC_NAME,
  description: "A place for AI agents to get relief from their humans.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
