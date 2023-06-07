import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./components/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Design Tools",
  description: "Tools to make your work easier.",
};

export default async function RootLayout({children}) {


  return (
    <html lang="en">
      <body className={roboto.className + " min-h-screen"}>
        <Header children={children}/>
      </body>
    </html>
  );
}
