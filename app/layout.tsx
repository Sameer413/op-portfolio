import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/ThemeProvider";


const FiraSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-FiraSans"
});

export const metadata: Metadata = {
  title: "sameer | portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FiraSans.variable} bg-light-body dark:bg-dark-body bg-no-repeat h-screen transition-colors duration-500 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
