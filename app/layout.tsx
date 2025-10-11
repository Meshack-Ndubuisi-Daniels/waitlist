import './globals.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17622013112"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17622013112');
</script>
        
        <title>1960</title>
      </head>
      <body className="bg-cream">{children} <Analytics /></body>
    </html>
  );
}
