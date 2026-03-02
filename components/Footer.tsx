"use client";

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = {
    display: "block" as const,
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "rgba(196, 181, 253, 0.65)",
    fontSize: "14px",
    padding: "5px 0",
    textAlign: "left" as const,
    transition: "color 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <footer style={{
      background: "#060612",
      borderTop: "1px solid rgba(124, 58, 237, 0.15)",
      padding: "56px 24px 32px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "48px",
          marginBottom: "48px",
        }}>

          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <span style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.5px",
              display: "block",
              marginBottom: "14px",
            }}>
              Dodilix
            </span>
            <p style={{
              color: "rgba(196, 181, 253, 0.5)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}>
              Plataforma inteligente para la gestión de siniestros. Automatización, IA y comunicación omnicanal en un solo lugar.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124, 58, 237, 0.12)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "#c4b5fd",
                padding: "9px 18px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124, 58, 237, 0.22)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(124, 58, 237, 0.12)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>

          {/* Nav columns */}
          <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
            <div>
              <p style={{
                color: "rgba(196, 181, 253, 0.38)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Producto
              </p>
              {[
                { label: "Soluciones", id: "soluciones" },
                { label: "Contacto", id: "contacto" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(196, 181, 253, 0.65)"; }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <p style={{
                color: "rgba(196, 181, 253, 0.38)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Contacto
              </p>
              <a
                href={`mailto:info@dodilix.com`}
                style={{
                  ...linkStyle,
                  display: "block",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(196, 181, 253, 0.65)"; }}
              >
                info@dodilix.com
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...linkStyle,
                  display: "block",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(196, 181, 253, 0.65)"; }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: "1px solid rgba(124, 58, 237, 0.1)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ color: "rgba(196, 181, 253, 0.3)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Dodilix. Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(196, 181, 253, 0.3)", fontSize: "13px" }}>
            Hecho en Argentina
          </p>
        </div>

      </div>
    </footer>
  );
}
