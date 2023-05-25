"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Design Tools",
  description: "Tools to make your work easier.",
};

export default async function RootLayout({ children }) {
  const navlinks = [
    { key: 0, link: "/", name: "Home" },
    { key: 1, link: "/casestatus", name: "Case Status Tracker" },
  ];

  const pathname = usePathname();

  //console.log("current path: ", pathname);

  return (
    <html lang="en">
      <body className={roboto.className + " min-h-screen"}>
        <div className="bg-gradient-to-r from-orange-500 from-50% to-orange-700 to-90% py-5 text-white fixed w-full">
          <div className="max-w-7xl px-5 mx-auto text-2xl font-medium">
            First Design Tools
          </div>
        </div>

        <div className="pt-20 pb-5 max-w-7xl mx-auto bg-white min-h-screen shadow-slate-200 shadow-md">
          <div className="py-3 px-5 mb-2">
            <div className="pt-3 text-base">
              {navlinks.map((x) => {
                const isActive = pathname.startsWith(x.href);
                //console.log("isActive: ", isActive);
                return (
                  <Link
                    key={x.key}
                    href={x.link}
                    className={
                      "px-3 py-2 font-medium max-md:flex " +
                      (isActive
                        ? "text-white bg-orange-500 rounded-sm"
                        : "hover:bg-orange-300")
                    }
                  >
                    {x.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mx-4 p-3 rounded-md">
            <div className="w-full border-b border-orange-500" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
