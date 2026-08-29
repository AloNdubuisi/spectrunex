import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0A1930",
          backgroundImage:
            "linear-gradient(135deg, #0A1930 0%, #0F2247 55%, #16305C 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#4C8DFF",
            marginBottom: 24,
          }}
        >
          SPECTRUNEX
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: 960,
          }}
        >
          Build. Maintain. Automate.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#B1C3DD",
            marginTop: 28,
            maxWidth: 880,
          }}
        >
          Construction, cleaning, software, mobile apps & AI automation — under one roof.
        </div>
      </div>
    ),
    { ...size }
  );
}
