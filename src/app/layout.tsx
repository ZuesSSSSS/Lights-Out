import type { Metadata } from "next";
import { Irish_Grover } from 'next/font/google';
import "./global.css"

// Set Font properties for a non-variable font (Irish Grover)
const irishGrover = Irish_Grover({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})


// Metadata for search indexing optimization.
export const metadata: Metadata = {
  title: "Lights Out",
  description: "A spooky lights & fixtures e-commerce.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={irishGrover.className}>
        {children}
      </body>
    </html>
  );
}
