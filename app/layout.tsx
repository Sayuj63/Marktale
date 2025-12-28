import { Montserrat, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ClientLayout } from "@/components/ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MarkTaleWorld - Powered by Ai",
    template: "%s | MarkTaleWorld",
  },
  description: "Online Internet Marketing Company That Grows Your Brand",
  keywords: ["Digital Marketing", "AI", "Marketing Agency", "SEO", "Web Development"],
  openGraph: {
    title: "MarkTaleWorld - Powered by Ai",
    description: "Online Internet Marketing Company That Grows Your Brand",
    url: "https://marktaleworld.com",
    siteName: "MarkTaleWorld",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
