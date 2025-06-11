import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ClientWrapper from '@/components/ClientWrapper';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  return {
    title: {
      default: "Bayond LLC - 革新的なテクノロジーソリューション",
      template: "%s | Bayond LLC"
    },
    description: "私たちは最新のテクノロジーを活用し、お客様のビジネスを次のレベルへと導く革新的なソリューションを提供している会社です。Next.js、React、Supabaseを使用したウェブ開発、データベース設計、クラウドサービスを提供しています。",
    keywords: ["ウェブ開発", "Next.js", "React", "Supabase", "データベース設計", "クラウドサービス", "ITソリューション", "東京", "会社"],
    authors: [{ name: "Bayond LLC" }],
    creator: "Bayond LLC",
    publisher: "Bayond LLC",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://bayond.com"),
    alternates: {
      canonical: "/",
      languages: {
        'ja': '/',
        'en': '/en',
      },
    },
    openGraph: {
      title: "Bayond LLC - 革新的なテクノロジーソリューション",
      description: "最新のテクノロジーを活用した革新的なソリューションを提供する会社です。",
      url: "https://bayond.com",
      siteName: "Bayond LLC",
      locale: locale === 'en' ? 'en_US' : 'ja_JP',
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Bayond LLC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bayond LLC - 革新的なテクノロジーソリューション",
      description: "最新のテクノロジーを活用した革新的なソリューションを提供する会社です。",
      images: ["/og-image.jpg"],
    },
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
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!['ja', 'en'].includes(locale)) notFound();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
