import '../globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://medinfo-project.vercel.app/'),
  title: 'Med Info',
  description:
    'Website containing multi lingual medical information.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
