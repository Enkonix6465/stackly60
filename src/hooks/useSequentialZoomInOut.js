import React, { useEffect, useRef } from "react";

export function useSequentialZoomInOut(cardCount, sectionRef, animate = true) {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observerRef.current.observe(sectionRef.current);
    return () => observerRef.current && observerRef.current.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    if (!inView || !animate) {
      setActiveIndex(-1);
      clearInterval(intervalRef.current);
      return;
    }
    let idx = 0;
    setActiveIndex(0);
    intervalRef.current = setInterval(() => {
      idx = (idx + 1) % cardCount;
      setActiveIndex(idx);
    }, 1500);
    return () => clearInterval(intervalRef.current);
  }, [inView, cardCount, animate]);

  return activeIndex;
}
