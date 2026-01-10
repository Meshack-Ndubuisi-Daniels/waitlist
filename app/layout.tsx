import Script from 'next/script'; // Add this import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head /> {/* Optional: For other head elements */}
      <body>
        {children}
        {/* Google Ads gtag.js script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17622013112"
          strategy="afterInteractive" // Loads after page hydration
        />
        <Script
          id="google-ads" // Unique ID for the script
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17622013112');
          `}
        </Script>
      </body>
    </html>
  );
}
