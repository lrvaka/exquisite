import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as fbq from "../lib/fpixel";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import GsapContext from "../store/gsap-context";
import Navbar from "../components/ui/Navbar/Navbar";
import { useRouter } from "next/router";
import PageTransitions from "../components/ui/PageTransitions";
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect";
import SplitText from "gsap/dist/SplitText";
import CustomEase from "gsap/dist/CustomEase";
import Script from "next/script";
import "../styles/globals.css";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps }) {
  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  const [smoother, setSmoother] = useState(null);
  const contentRef = useRef();
  const wrapperRef = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (smoother) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

    let scroller = ScrollSmoother.create({
      ignoreMobileResize: true,
      wrapper: wrapperRef.current,
      content: contentRef.current,
      effects: true,
      // smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    setSmoother(scroller);

    return () => {};
  }, [router.asPath]);

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useIsomorphicLayoutEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)

    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };

    router.events.on("routeChangeStart", pageChange);

    return () => {
      router.events.off("routeChangeStart", pageChange);
    };
  }, [router.events]);

  useIsomorphicLayoutEffect(() => {
    //register custom easing functions
    gsap.registerPlugin(CustomEase);
    CustomEase.create("a1", "0.6, 0.01, -0.05, 0.95");
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
        `}
      </Script>

      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />

      <GsapContext.Provider
        value={{
          smoother,
          setSmoother,
          contentRef,
        }}
      >
        <div ref={wrapperRef}>
          <Navbar />
          <PageTransitions
            route={router.asPath}
            routingPageOffset={routingPageOffset}
          >
            <Component {...pageProps} />
          </PageTransitions>
        </div>
      </GsapContext.Provider>
    </>
  );
}

export default MyApp;
