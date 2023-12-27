import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css'
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextechNews',
  description: 'NexTechNews - The Premier Tech News Aggregator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scrollbar-hide'>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
