"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const countries = [
  "Argentina", "México", "Chile", "Colombia", "Perú", "Uruguay", "Bolivia",
  "Paraguay", "Ecuador", "Venezuela", "Brasil", "España", "Otro",
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    pais: "",
    comentario: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.nombre.trim()) { setError("Por favor, completá tu nombre y apellido."); return; }
    if (!form.empresa.trim()) { setError("Por favor, completá el nombre de tu empresa."); return; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Por favor, ingresá un email válido.");
      return;
    }
    if (!form.pais) { setError("Por favor, seleccioná tu país."); return; }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ nombre: "", empresa: "", email: "", pais: "", comentario: "" });
      } else {
        const data = await res.json();
        setError(data.message || "Ocurrió un error. Intentá nuevamente.");
      }
    } catch {
      setError("No se pudo enviar el formulario. Revisá tu conexión e intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "rgba(13, 13, 43, 0.8)",
    border: "1px solid rgba(124, 58, 237, 0.25)",
    borderRadius: "10px",
    padding: "14px 16px",
    color: "white",
    fontSize: "15px",
    width: "100%",
    outline: "none",
    transition: "all 0.25s ease",
    fontFamily: "inherit",
  };

  return (
    <section id="contacto" style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0b051e 60%, #060612 100%)",
    }}>
      {/* Orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <AnimatedSection delay={0.05}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(124, 58, 237, 0.12)",
              border: "1px solid rgba(124, 58, 237, 0.35)",
              color: "#c4b5fd",
              padding: "7px 16px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Contacto
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Solicitar{" "}
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                demo
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p style={{
              color: "rgba(196, 181, 253, 0.7)",
              fontSize: "16px",
              maxWidth: "480px",
              margin: "0 auto",
            }}>
              Completá el formulario y coordinamos una demo enfocada en tu proceso.
            </p>
          </AnimatedSection>
        </div>

        {/* Form Card */}
        <AnimatedSection delay={0.2}>
          <div style={{
            background: "rgba(13, 13, 43, 0.85)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "24px",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top border glow */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.9), rgba(236, 72, 153, 0.5), transparent)",
            }} />

            {success ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(124, 58, 237, 0.15)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ color: "white", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
                  ¡Gracias por contactarnos!
                </h3>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "16px", lineHeight: 1.6 }}>
                  Recibimos tu solicitud. Nos pondremos en contacto pronto para coordinar
                  la demo personalizada.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  style={{
                    marginTop: "28px",
                    background: "transparent",
                    color: "#c4b5fd",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Enviar otro formulario
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Grid 2 cols */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px",
                }}>
                  {/* Nombre */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(196, 181, 253, 0.8)",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      letterSpacing: "0.02em",
                    }}>
                      Nombre y apellido *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Juan García"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.65)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.25)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(196, 181, 253, 0.8)",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}>
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.65)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.25)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(196, 181, 253, 0.8)",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.65)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.25)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* País */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(196, 181, 253, 0.8)",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}>
                      País *
                    </label>
                    <select
                      name="pais"
                      value={form.pais}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23a855f7' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: "40px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.65)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(124, 58, 237, 0.25)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="" style={{ background: "#0d0d2b" }}>Seleccioná tu país</option>
                      {countries.map((c) => (
                        <option key={c} value={c} style={{ background: "#0d0d2b" }}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comentario */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={{
                    display: "block",
                    color: "rgba(196, 181, 253, 0.8)",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}>
                    Comentario <span style={{ color: "rgba(196, 181, 253, 0.4)", fontWeight: 400 }}>(opcional)</span>
                  </label>
                  <textarea
                    name="comentario"
                    value={form.comentario}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu operación, el volumen de siniestros que manejás o cualquier consulta específica..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "110px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(124, 58, 237, 0.65)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(124, 58, 237, 0.25)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div style={{
                    background: "rgba(239, 68, 68, 0.08)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#fca5a5",
                    fontSize: "14px",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="1.8"/>
                      <path d="M12 8v4M12 16h.01" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading
                      ? "rgba(124, 58, 237, 0.5)"
                      : "linear-gradient(135deg, #7c3aed, #6d28d9)",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 8px 30px rgba(124, 58, 237, 0.45)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.65)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(124, 58, 237, 0.45)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {loading ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar demo
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p style={{
                  textAlign: "center",
                  color: "rgba(196, 181, 253, 0.45)",
                  fontSize: "12px",
                  marginTop: "16px",
                }}>
                  Tus datos son confidenciales y no serán compartidos con terceros.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
