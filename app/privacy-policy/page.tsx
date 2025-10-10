import script from 'next/script';

export default function PrivacyPolicyPage() {
  return (
    
    
    <div className="max-w-3xl mx-auto p-4 text-brown font-montserrat min-h-screen flex flex-col items-center">

<head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17622013112"
          strategy="afterInteractive"
        />
        {/* Inline config script */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17622013112');
          `}
        </Script>
      </head>
      
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        By joining our waitlist, you consent to Nineteen60 storing and
        processing your personal information (email and phone number) to send
        updates, newsletters, and marketing communications. You may unsubscribe
        at any time.
      </p>
      <p className="mt-2">
        Your data will not be shared with any third parties outside of our
        email service provider (Mailchimp). For full details, contact us at
        geraldhenlesloop@gmail.com.
      </p>
    </div>
     
      
  );
}
