import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ApolloWrapper } from "@/utils/apollo_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ApolloWrapper>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ApolloWrapper>
    </ClerkProvider>
  );
}
