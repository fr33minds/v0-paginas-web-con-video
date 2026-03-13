import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Academias Uriel Adriano | Taekwondo',
  description: 'Academia de Taekwondo. Formamos campeones con disciplina, respeto y excelencia. Clases para ninos, jovenes y adultos.',
  generator: 'v0.app',
  keywords: ['taekwondo', 'artes marciales', 'academia', 'ninos', 'adultos', 'disciplina'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
