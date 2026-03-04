"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SplitType = "chars" | "words";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  tag?: "p" | "span";
  onLetterAnimationComplete?: () => void;
};

function parseRootMargin(rootMargin: string, threshold: number) {
  const startPct = (1 - threshold) * 100;
  const match = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
  const marginValue = match ? Number.parseFloat(match[1]) : 0;
  const marginUnit = match ? match[2] || "px" : "px";
  if (marginValue === 0) return `top ${startPct}%`;
  return `top ${startPct}%${marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`}`;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const animationCompletedRef = useRef(false);
  const [readyTick, setReadyTick] = useState(0);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.fonts?.ready
      .then(() => setReadyTick((v) => v + 1))
      .catch(() => setReadyTick((v) => v + 1));
  }, []);

  const pieces = useMemo(() => {
    if (!text) return [];
    return splitType === "words" ? text.split(" ") : Array.from(text);
  }, [text, splitType]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !text || animationCompletedRef.current) return;

      const targets = Array.from(
        el.querySelectorAll<HTMLElement>(splitType === "words" ? ".split-word" : ".split-char"),
      );
      if (!targets.length) return;

      const start = parseRootMargin(rootMargin, threshold);

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          willChange: "transform, opacity",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
        },
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
      };
    },
    {
      dependencies: [text, splitType, delay, duration, ease, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, readyTick],
      scope: ref,
    },
  );

  const content = pieces.map((piece, index) => {
    const isWord = splitType === "words";
    return (
      <span
        key={`${piece}-${index}`}
        className={isWord ? "split-word" : "split-char"}
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {piece === " " ? "\u00A0" : piece}
        {isWord && index < pieces.length - 1 ? "\u00A0" : ""}
      </span>
    );
  });

  const sharedProps = {
    className: `split-parent ${className}`.trim(),
    style: {
      textAlign,
      overflow: "hidden",
      display: "inline-block",
      whiteSpace: "normal",
      wordWrap: "break-word",
      willChange: "transform, opacity",
    } as const,
  };

  if (tag === "span") {
    return (
      <span
        ref={(el) => {
          ref.current = el;
        }}
        {...sharedProps}
      >
        {content}
      </span>
    );
  }

  return (
    <p
      ref={(el) => {
        ref.current = el;
      }}
      {...sharedProps}
    >
      {content}
    </p>
  );
}
