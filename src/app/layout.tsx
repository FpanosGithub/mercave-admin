import './globals.css'
import { Inter } from 'next/font/google'
import GlobalNav from '@/componentes/GlobalNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin BD Mercave',
  description: 'Herramienta para administrar las bases de datos de Mercave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalNav>
          {children}
        </GlobalNav>
      </body>
    </html>
  )
}
