import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "EMC Yoga School", // Updated title
  description: "Online Yoga School Platform", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Remove Geist font variables from className to allow globals.css fonts to take precedence
    // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    <html lang="ja"> {/* Changed lang to ja */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
