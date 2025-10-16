import { useEffect, useState, useRef } from "react";

export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [start, target, duration]);
  return count;
}
