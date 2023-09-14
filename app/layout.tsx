import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/config/site";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: site.title,
        template: `%s ${site.titleTemplate}`,
    },
    description: site.description,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    manifest: "/favicon/site.webmanifest",
    keywords: site.keywords,
    themeColor: "#000",
    creator: "BasheerRajeh",
    openGraph: {
        url: `${site.url}`,
        type: "website",
        title: site.title,
        siteName: site.title,
        description: site.description,
        locale: "en-US",
    },
    icons: {
        icon: "/favicon/favicon.svg",
        shortcut: "/favicon/favicon.svg",
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [...site.favicons],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(inter.variable, "dark scroll-smooth")}
            suppressHydrationWarning={true}
        >
            <body className="font-default">
                <Header />
                <main className="relative mx-auto min-h-[calc(100vh-56px-64px)] max-w-4xl px-8 py-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
