"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 0",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(6, 6, 18, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.15)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none" }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-dodilix.png`}
              alt="Dodilix"
              style={{
                height: "80px",
                width: "auto",
                display: "block",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
