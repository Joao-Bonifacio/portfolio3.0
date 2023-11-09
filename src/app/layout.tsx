import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Portifólio de demonstração de conhecimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icons/livro.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
