"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const NAV_ITEMS = [
  { label: "Nosotros",    id: "nosotros"   },
  { label: "Soluciones",  id: "beneficios" },
  { label: "Servicios",   id: "soluciones" },
  { label: "Contáctanos", id: "contacto"   },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [hoveredIndex,  setHoveredIndex]  = useState<number | null>(null);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [textLines,     setTextLines]     = useState(["Menú", "Cerrar"]);

  const menuOpenRef          = useRef(false);
  const panelRef             = useRef<HTMLElement>(null);
  const preLayersRef         = useRef<HTMLDivElement>(null);
  const preLayerElsRef       = useRef<Element[]>([]);
  const plusHRef             = useRef<HTMLSpanElement>(null);
  const plusVRef             = useRef<HTMLSpanElement>(null);
  const iconRef              = useRef<HTMLSpanElement>(null);
  const textInnerRef         = useRef<HTMLSpanElement>(null);
  const toggleBtnRef         = useRef<HTMLButtonElement>(null);
  const openTlRef            = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef        = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef         = useRef<gsap.core.Tween | null>(null);
  const busyRef              = useRef(false);

  /* scroll listener */
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* GSAP init for mobile panel */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel    = panelRef.current;
      const preBox   = preLayersRef.current;
      if (!panel || !preBox) return;

      const layers = Array.from(preBox.querySelectorAll(".sm-pre"));
      preLayerElsRef.current = layers;

      gsap.set([panel, ...layers], { xPercent: 100 });
      if (plusHRef.current) gsap.set(plusHRef.current, { transformOrigin: "50% 50%", rotate: 0 });
      if (plusVRef.current) gsap.set(plusVRef.current, { transformOrigin: "50% 50%", rotate: 90 });
      if (iconRef.current)  gsap.set(iconRef.current,  { rotate: 0, transformOrigin: "50% 50%" });
      if (textInnerRef.current) gsap.set(textInnerRef.current, { yPercent: 0 });
    });
    return () => ctx.revert();
  }, []);

  /* Build open timeline */
  const buildOpenTl = useCallback(() => {
    const panel  = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll(".sm-label"));
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

    const layerStates = layers.map(el => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }));
    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach(({ el, start }, i) => {
      tl.fromTo(el, { xPercent: start }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07);
    });

    const panelTime = layerStates.length ? (layerStates.length - 1) * 0.07 + 0.08 : 0;
    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: 0.65, ease: "power4.out" }, panelTime);

    if (itemEls.length) {
      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: { each: 0.1 } },
        panelTime + 0.1,
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTl();
    if (tl) {
      tl.eventCallback("onComplete", () => { busyRef.current = false; });
      tl.play(0);
    } else busyRef.current = false;
  }, [buildOpenTl]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    const panel  = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;
    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: 100, duration: 0.32, ease: "power3.in", overwrite: "auto",
      onComplete: () => { busyRef.current = false; },
    });
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    if (!iconRef.current) return;
    spinTweenRef.current?.kill();
    spinTweenRef.current = gsap.to(iconRef.current, {
      rotate: opening ? 225 : 0,
      duration: opening ? 0.8 : 0.35,
      ease: opening ? "power4.out" : "power3.inOut",
      overwrite: "auto",
    });
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    const seq = opening
      ? ["Menú",   "Cerrar", "Cerrar"]
      : ["Cerrar", "Menú",   "Menú"];
    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });
    gsap.to(inner, {
      yPercent: -((seq.length - 1) / seq.length) * 100,
      duration: 0.45,
      ease: "power4.out",
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const next = !menuOpenRef.current;
    menuOpenRef.current = next;
    setMenuOpen(next);
    if (next) playOpen(); else playClose();
    animateIcon(next);
    animateText(next);
  }, [playOpen, playClose, animateIcon, animateText]);

  const closeMenu = useCallback(() => {
    if (!menuOpenRef.current) return;
    menuOpenRef.current = false;
    setMenuOpen(false);
    playClose();
    animateIcon(false);
    animateText(false);
  }, [playClose, animateIcon, animateText]);

  /* Close on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handle = (e: MouseEvent) => {
      if (
        panelRef.current?.contains(e.target as Node) ||
        toggleBtnRef.current?.contains(e.target as Node)
      ) return;
      closeMenu();
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "72px",
          overflow: "visible",
          transition: "all 0.3s ease",
          background:     scrolled ? "rgba(6, 6, 18, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom:   scrolled ? "1px solid rgba(124, 58, 237, 0.15)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "0 24px",
          display: "flex", alignItems: "center",
          height: "72px",
          position: "relative",
        }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-dodilix.png`}
              alt="Dodilix"
              style={{ height: "130px", width: "auto", display: "block", cursor: "pointer" }}
            />
          </a>

          {/* ── Desktop links (pill container centered) ── */}
          <div
            className="nav-desktop-links"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "2px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "5px",
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  background: hoveredIndex === i ? "rgba(255,255,255,0.11)" : "transparent",
                  border: "none",
                  borderRadius: "100px",
                  padding: "7px 20px",
                  color: hoveredIndex === i ? "white" : "rgba(255,255,255,0.65)",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "background 0.2s ease, color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {item.label}
                {/* Active dot */}
                <span style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  opacity: hoveredIndex === i ? 1 : 0,
                  transition: "opacity 0.2s ease",
                  display: "block",
                }} />
              </button>
            ))}
          </div>

          {/* ── Mobile hamburger ── */}
          <div className="nav-mobile-toggle" style={{ marginLeft: "auto" }}>
            <button
              ref={toggleBtnRef}
              onClick={toggleMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "100px",
                padding: "7px 14px",
                color: "white",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {/* Cycling text */}
              <span style={{ overflow: "hidden", height: "1.2em", display: "block" }}>
                <span
                  ref={textInnerRef}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {textLines.map((l, idx) => (
                    <span key={idx} style={{ display: "block", lineHeight: "1.2", whiteSpace: "nowrap" }}>
                      {l}
                    </span>
                  ))}
                </span>
              </span>
              {/* Plus → X icon */}
              <span
                ref={iconRef}
                style={{ position: "relative", width: "14px", height: "14px", display: "block", flexShrink: 0 }}
              >
                <span ref={plusHRef} style={{
                  position: "absolute", top: "50%", left: 0,
                  width: "100%", height: "1.5px",
                  background: "currentColor",
                  transform: "translateY(-50%)",
                  borderRadius: "2px",
                }} />
                <span ref={plusVRef} style={{
                  position: "absolute", top: "50%", left: 0,
                  width: "100%", height: "1.5px",
                  background: "currentColor",
                  transform: "translateY(-50%)",
                  borderRadius: "2px",
                  transformOrigin: "50% 50%",
                }} />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile prelayers (slide-in backdrop layers) ── */}
      <div
        ref={preLayersRef}
        style={{ position: "fixed", inset: 0, zIndex: 200, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div className="sm-pre" style={{ position: "absolute", inset: 0, background: "#7c3aed" }} />
        <div className="sm-pre" style={{ position: "absolute", inset: 0, background: "#4c1d95" }} />
      </div>

      {/* ── Mobile panel ── */}
      <aside
        ref={panelRef}
        aria-hidden={!menuOpen}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(400px, 100vw)",
          background: "#07060f",
          zIndex: 201,
          overflowY: "auto",
        }}
      >
        <div style={{
          padding: "96px 48px 60px",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          {/* Close button */}
          <button
            onClick={closeMenu}
            style={{
              position: "absolute", top: "24px", right: "24px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "100px",
              color: "white",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Cerrar ✕
          </button>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.id}
                style={{ overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => scrollToSection(item.id), 380);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    textDecoration: "none",
                  }}
                >
                  <span style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.28)",
                    fontWeight: 700,
                    minWidth: "24px",
                    letterSpacing: "0.05em",
                  }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="sm-label"
                    style={{
                      fontSize: "clamp(30px, 8vw, 52px)",
                      fontWeight: 800,
                      color: "white",
                      letterSpacing: "-1px",
                      lineHeight: 1.15,
                      display: "block",
                      willChange: "transform",
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
