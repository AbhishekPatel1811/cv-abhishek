import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Abhishek Patel - AI-Native Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#908f89", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#c9f24d" }} />
          Mumbai, India - open to roles &amp; freelance
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 700, color: "#f6f5f1", lineHeight: 1.02, letterSpacing: -3 }}>
            I build &amp; ship
          </div>
          <div style={{ fontSize: 110, fontWeight: 700, color: "#c9f24d", lineHeight: 1.02, letterSpacing: -3 }}>
            AI products.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#f6f5f1" }}>
            Abhishek Patel<span style={{ color: "#c9f24d" }}>.</span>
          </div>
          <div style={{ fontSize: 26, color: "#908f89" }}>AI-Native Full-Stack Engineer</div>
        </div>
      </div>
    ),
    size
  );
}
