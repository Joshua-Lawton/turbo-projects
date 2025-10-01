import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/checklist">
                <li>Checklist</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <h3>Layout footer</h3>
        </footer>
      </body>
    </html>
  );
}
