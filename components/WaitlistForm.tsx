"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setStatus("❌ Please agree to our Privacy Policy before joining.");
      return;
    }

    try {
      // Call your API route that integrates with Mailchimp
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      if (res.ok) {
        setStatus("🎉 Thanks for joining the waitlist!");
        setEmail("");
        setPhone("");
        setConsent(false);
      } else {
        const data = await res.json();
        setStatus(`⚠️ ${data.error || "Something went wrong. Try again."}`);
      }
    } catch (err) {
      setStatus("⚠️ Error connecting. Try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md p-6 border rounded-lg shadow-md text-brown font-montserrat"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Your phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <label className="flex items-start space-x-2 text-sm">
          <div style={{display:'flex', gap: '1rem'}}>
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              required />
          
            <div style={{width:'15rem', display: 'flex', alignItems:'center'}}>
              I agree to receive updates and marketing from Nineteen60.{" "}
            </div>
            
          
          </div>
          <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-brown"
            >
              Read our Privacy Policy
          </a>
        </label>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Join Waitlist
          </button>
        </div>

        {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
