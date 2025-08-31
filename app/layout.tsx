import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ananya Solanki - Portfolio",
  description: "Personal portfolio of Ananya Solanki",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Ananya Solanki - Portfolio",
    description: "Personal portfolio of Ananya Solanki",
    url: "https://ananya-solanki-portfolio.vercel.app",
    siteName: "Ananya Solanki Portfolio",
    images: [
      {
        url: "https://ananya-solanki-portfolio.vercel.app/browser.png", // full URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },  
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
