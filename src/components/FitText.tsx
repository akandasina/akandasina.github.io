import { useLayoutEffect, useRef, type ReactNode } from "react";

/** Scales one line of text so it fills its container's width exactly. */
export function FitText({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;

    const fit = () => {
      el.style.fontSize = "100px";
      const style = getComputedStyle(box);
      const avail = box.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      // a hair of slack so wide glyph edges never poke past the margin
      const size = (100 * avail * 0.985) / el.scrollWidth;
      el.style.fontSize = `${Math.floor(size * 100) / 100}px`;
    };

    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {children}
    </span>
  );
}
