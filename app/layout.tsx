

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
        
      </body>
    </html>
  );
}
