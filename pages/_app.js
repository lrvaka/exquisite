import { useState, useRef } from "react";
import { gsap } from "gsap";
import { GTM_ID, pageview } from "../lib/gtm";
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
      smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    setSmoother(scroller);

    return () => {};
  }, [router.asPath]);

  useIsomorphicLayoutEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };

    router.events.on("routeChangeStart", pageChange);
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
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
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
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
