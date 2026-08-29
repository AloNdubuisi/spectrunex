import Script from "next/script";

/**
 * Loads Google's gtag.js (Google Analytics 4 and/or Google Ads conversion
 * tracking) — only if NEXT_PUBLIC_GTAG_ID is set. Add it to your .env file
 * or your host's environment variables, e.g.:
 *
 *   NEXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX      (Analytics 4 property)
 *   NEXT_PUBLIC_GTAG_ID=AW-XXXXXXXXX      (Google Ads account/conversion ID)
 *
 * Leave it unset and nothing loads — no third-party script, no cookies.
 */
export default function AnalyticsTag() {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;

  if (!gtagId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
}
