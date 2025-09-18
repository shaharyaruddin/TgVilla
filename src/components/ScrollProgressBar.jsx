"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#E8E4D9] z-[150] ">
      <div
        className="h-1 bg-[#F3B700] transition-all rounded-r-2xl duration-200"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
