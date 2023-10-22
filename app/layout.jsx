import Navbar from "@/components/Navbar"
import "../styles/globals.css"
import { Inter, Lexend } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Kaiber Media',
  description: ' Where Imagination Meets Innovation. Elevate your brand with our top-tier graphic design services. Explore creativity reimagined.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
          <Navbar />
          <div className="w-full sm:justify-center sm:flex">  
          {children}
          </div>
          
      </body>

    </html>
  )
}
