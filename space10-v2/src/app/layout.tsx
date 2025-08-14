import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPACE10 – 2015-2023",
  description: "A research and design lab on a mission to create a better everyday life for people and the planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <body suppressHydrationWarning>
        {/* Exact dark mode script from space10.com */}
        <script 
          id="darkmode" 
          dangerouslySetInnerHTML={{
            __html: `
              (function(classList, localStorage) {
                var prefersDarkMode = localStorage.getItem('(prefers-color-scheme: dark)');
                classList.toggle('theme-light', prefersDarkMode === 'false');
                classList.toggle('theme-dark', prefersDarkMode === 'true');
              })(document.documentElement.classList, window.localStorage);
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
