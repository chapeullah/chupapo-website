import { useEffect, useRef, useState } from "react";

export function useCopyToClipboard({ resetDelay = 1500 } = {}) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef(null);

  async function copy(value) {
    try {
      await navigator.clipboard.writeText(value);

      window.clearTimeout(resetTimerRef.current);
      setCopied(true);

      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, resetDelay);

      return true;
    } catch {
      return false;
    }
  }

  useEffect(() => {
    return () => {
      window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  return { copied, copy };
}
