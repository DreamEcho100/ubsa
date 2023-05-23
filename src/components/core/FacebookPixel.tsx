import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { env } from "~/env.mjs";

const handleRouteChange = () => {
  pageview();
};

const FB_PIXEL_ID = env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const pageview = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  (window as any).fbq("track", "PageView");
};

const FacebookPixel = () => {
  const router = useRouter();

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
  );
};

export default FacebookPixel;
