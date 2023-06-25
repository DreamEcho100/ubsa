import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { env } from "~/env.mjs";

const handleRouteChange = () => {
  pageview();
};

const TWITTER_PIXEL_ID = env.NEXT_PUBLIC_TWITTER_PIXEL_ID;

const pageview = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  (window as any).twq("track", "PageView");
};

const TwitterPixel = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, isReady]);

  return (
    <Script
      id="twitter-pixel"
      strategy="lazyOnload"
      onReady={() => setIsReady(true)}
    >
      {`
			!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','${TWITTER_PIXEL_ID}');
twq('init','${TWITTER_PIXEL_ID}');
twq('track','PageView')
      `}
    </Script>
  );
};

export default TwitterPixel;
