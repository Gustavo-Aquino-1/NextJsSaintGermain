import Header from '@/components/header/Header'
import './globals.css'

export const metadata = {
  title: 'Saint Germain',
  description: 'Delicious meals, shared by a food-loving community.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
