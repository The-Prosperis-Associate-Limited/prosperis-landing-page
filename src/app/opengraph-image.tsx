import { ImageResponse } from "next/og";

export const alt = "The Prosperis Associates Limited";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#073fa7",
        color: "white",
        display: "flex",
        height: "100%",
        overflow: "hidden",
        padding: "56px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255,255,255,.22)",
          borderRadius: "999px",
          display: "flex",
          height: 440,
          position: "absolute",
          right: -80,
          top: 95,
          width: 440,
        }}
      />
      <div
        style={{
          background: "#f2ff88",
          borderRadius: "999px",
          display: "flex",
          height: 92,
          position: "absolute",
          right: 116,
          top: 267,
          width: 92,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
          <div
            style={{
              alignItems: "center",
              background: "#f2ff88",
              borderRadius: 14,
              color: "#073fa7",
              display: "flex",
              fontSize: 34,
              fontWeight: 800,
              height: 62,
              justifyContent: "center",
              width: 62,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            PROSPERIS ASSOCIATES
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 650,
              letterSpacing: "-4px",
              lineHeight: 1,
              maxWidth: 850,
            }}
          >
            The Right People. The Right Skills. The Right Solutions.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,.72)",
              display: "flex",
              fontSize: 24,
              marginTop: 28,
            }}
          >
            Technology · Talent · Learning
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
