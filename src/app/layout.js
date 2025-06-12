import './globals.css'

export const metadata = {
  title: 'NONDA',
  description: 'NONDA Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <p>&copy; 2024 NONDA</p>
        </footer>
      </body>
    </html>
  )
}
