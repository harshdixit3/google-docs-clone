import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import Provider from "@/app/Provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Docks",
  description: "Docks Application for all the user to store the data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider
          appearance={
        { baseTheme : dark,
            variables : {
            colorPrimary: "#3371ff",
                fontSize: '16px'
            },

        }
          }
      >
        <html lang="en" suppressHydrationWarning>
        <body className={fontSans.className}>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
      </ClerkProvider>
  );
}
