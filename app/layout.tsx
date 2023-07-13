import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Todo App",
  description: "A simple Todo application with CRUD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-mWhite m-2">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
