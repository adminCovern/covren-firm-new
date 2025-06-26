import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Covren Firm | Sovereign AI - Own Your Digital Empire',
  description: 'Stop renting AI. Start owning it. Build sovereign digital intelligence with complete ownership, zero dependencies, and infinite scale.',
  keywords: 'AI development, sovereign AI, custom AI solutions, AI consulting, SOVREN AI, digital sovereignty, AI ownership',
  authors: [{ name: 'Covren Firm' }],
  creator: 'Covren Firm',
  publisher: 'Covren Firm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://covrenfirm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Covren Firm | Sovereign AI - Own Your Digital Empire',
    description: 'Stop renting AI. Start owning it. Build sovereign digital intelligence with complete ownership.',
    url: 'https://covrenfirm.com',
    siteName: 'Covren Firm',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Covren Firm - Sovereign AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Covren Firm | Sovereign AI',
    description: 'Stop renting AI. Start owning it.',
    creator: '@covrenfirm',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Sovereign Theme Color */}
        {/* Security Headers */}
        {/* Performance Hints */}
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Covren Firm',
              url: 'https://covrenfirm.com',
              logo: 'https://covrenfirm.com/logo.png',
              description: 'Building sovereign digital intelligence for those who refuse to rent their future.',
              sameAs: [
                'https://twitter.com/covrenfirm',
                'https://linkedin.com/company/covrenfirm',
                'https://github.com/covrenfirm'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-888-SOVREN-1',
                contactType: 'sales',
                email: 'sovereign@covrenfirm.com',
                areaServed: 'Worldwide',
                availableLanguage: ['English']
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Sovereignty Gradient Background */}
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Global Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Sovereignty Analytics
              console.log('%c COVREN FIRM ', 'background: #10b981; color: #000; font-size: 24px; font-weight: bold; padding: 10px;');
              console.log('%c Building Sovereign AI Empires ', 'color: #10b981; font-size: 14px;');
              console.log('%c WARNING: This console is for developers only. ', 'color: #ef4444; font-size: 12px;');
            `
          }}
        />
      </body>
    </html>
  );
}
