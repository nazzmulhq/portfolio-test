import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    content="strict-origin-when-cross-origin"
                    name="referrer"
                />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
            </head>
            <body className={inter.className}>
                <AntdRegistry>
                    <main className="h-screen w-screen">{children}</main>
                </AntdRegistry>
            </body>
        </html>
    );
}
