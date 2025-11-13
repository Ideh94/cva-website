/**
 * theme.js
 *
 * This file defines the global design system for the entire app.
 * It includes:
 *   - Colors: primary, accent, neutral tones, semantic colors (success, warning, danger, info)
 *   - Typography: font families, weights, and sizes
 *   - Spacing: xs → xxl and container width
 *   - Radius: border-radius values
 *   - Shadows: sm, md, lg, accent glow
 *   - Transition timings
 *   - Breakpoints for responsive design
 *   - Buttons: primary, secondary, ghost, accent
 *   - Utility gradients and overlays
 *
 * Purpose: Provide a single source of truth for consistent styling
 * across the app. Components should reference these values instead of
 * hardcoding colors, spacing, or fonts.
 *
 * Usage:
 *   import { theme } from "../constants/theme";
 *   <button style={{ background: theme.colors.primary, color: theme.colors.text.inverse }}>Click</button>
 */

export const theme = {
  colors: {
    // 🌑 Brand Core
    primary: "#111827",        // Vibrant royal blue — brand base
    primaryLight: "#60A5FA",   // Lighter blue for hover & headers
    primaryDark: "#08153dff",    // Darker blue for depth/overlays

    // ✨ Accent & Highlights
    accent: "#F59E0B",         // Amber for contrast and highlights
    accentDark: "#B45309",     // Dark amber for hover/active
    accentMuted: "#FEF3C7",    // Soft amber tint for borders/hover

    // ⚪ Neutral Tones
    background: "#F3F4F6",     // Slightly warm off-white background
    surface: "#FFFFFF",        // True white for content sections
    canvas: "#E5E7EB",         // Light gray for soft contrast
    border: "#D1D5DB",         // Neutral light gray border
    muted: "#9CA3AF",          // Subtle gray for inactive UI

    // Text System
    text: {
      primary: "#111827",      // Deep slate for readability
      secondary: "#64768fff",    // Cool gray-blue for body text
      inverse: "#FFFFFF",      // For dark surfaces
      subtle: "#6B7280",       // Muted gray for captions or hints
      newcolor: "#01612B"
    },

    // 🚦 Semantic
    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#DC2626",
    info: "#3B82F6",
  },

  typography: {
    fontFamily:
      "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    sizes: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem", xl: "1.5rem", xxl: "2rem", hero: "3.25rem" },
  },

  spacing: { xs: "6px", sm: "12px", md: "16px", lg: "24px", xl: "32px", xxl: "48px", container: "1200px" },

  radius: { sm: "6px", md: "10px", lg: "16px", round: "9999px" },

  shadow: {
    sm: "0 2px 6px rgba(59,130,246,0.08)",
    md: "0 6px 16px rgba(59,130,246,0.12)",
    lg: "0 12px 28px rgba(59,130,246,0.18)",
    accent: "0 0 20px rgba(245,158,11,0.4)",
  },

  transition: { fast: "150ms ease", base: "300ms ease", slow: "450ms cubic-bezier(.2,.9,.3,1)" },

  breakpoints: { xs: "480px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },

  buttons: {
    primary: {
      background: "#3B82F6",
      color: "#FFFFFF",
      border: "none",
      hoverBackground: "#60A5FA",
      activeBackground: "#1E40AF",
      boxShadow: "0 8px 18px rgba(59,130,246,0.35)",
    },
    secondary: {
      background: "#FFFFFF",
      color: "#3B82F6",
      border: "1px solid #D1D5DB",
      hoverBackground: "#EFF6FF",
      boxShadow: "0 4px 10px rgba(59,130,246,0.08)",
    },
    ghost: {
      background: "transparent",
      color: "#3B82F6",
      border: "1px solid transparent",
      hoverBackground: "rgba(59,130,246,0.1)",
    },
    accent: {
      background: "linear-gradient(90deg, #F59E0B, #B45309)",
      color: "#FFFFFF",
      border: "none",
      hoverBackground: "linear-gradient(90deg, #B45309, #78350F)",
      boxShadow: "0 10px 24px rgba(245,158,11,0.4)",
    },
  },

  utils: {
    heroOverlay: "linear-gradient(180deg, rgba(30,64,175,0.85), rgba(30,64,175,0.65))",
    accentGradient: "linear-gradient(90deg, #a4abbd, #404756",
    glass: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
  },
};
