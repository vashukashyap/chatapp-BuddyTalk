import { Metadata } from "next"


export const metadata = {
  title: 'Buddy Talk',
  description: 'Buddy talk connect you with your friends',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
