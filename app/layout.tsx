import './globals.css';
// ... rest of your file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>1960</title>
      </head>
      <body className="bg-cream">{children}</body>
    </html>
  );
}
