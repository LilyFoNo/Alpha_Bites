"use client";

import "./globals.css";
import { Provider } from "react-redux";
import store from "./context/store";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <Navbar />
          <Provider store={store}>
            <main className="pt-16">{children}</main>
          </Provider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
