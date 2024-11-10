import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from '@clerk/localizations'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CBTA | Sistema de Gestión escolar",
  description: "Sistema de Gestión escolar del CBTA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esMX}>
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
