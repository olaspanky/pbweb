import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import "./globals.css";
import localFont from "next/font/local";

const isidoraSans = localFont({
  src: [
    {
      path: "../../public/fonts/IsidoraSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-isidoraSans",
  display: "swap",
});

export const metadata = {
  title: "PBR Life Sciences",
  description: "A Life Sciences Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${isidoraSans.variable} scroll-smooth`}>

     <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      <body className="">{children}</body>
    </html>
  );
}
