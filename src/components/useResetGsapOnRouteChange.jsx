import { useEffect } from "react";
import { gsap } from "gsap";

export function useResetGsapOnRouteChange(pathname) {
  useEffect(() => {
    // Kill all scroll triggers & animations on route change
    gsap.killTweensOf("*");
    if (gsap.core) {
      gsap.core.globals().ScrollTrigger?.getAll().forEach(st => st.kill());
    }
  }, [pathname]);
}
