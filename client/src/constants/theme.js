// src/constants/theme.js.
// The theme constant defines the app's design system. 
// With this constant we can reuse anywhere on the app, to maintain visual consistency. 
// All we need to do is to import { theme } from "../constants/theme"; at the top. Make sure to check the folder path correctly.
// then inside your style property, you call it like this backgroundColor: theme.colors.primary,


export const theme = {
  // Brand Colors
  colors: {
    primary: "#004d8d",       // Main brand blue
    primaryLight: "#1a6fb8",  // Lighter blue
    primaryDark: "#003864",   // Darker blue
    accent: "#00b8d9",        // Secondary highlight
    success: "#2ecc71",
    warning: "#f1c40f",
    danger: "#e74c3c",
    background: "#f9fafb",    // Page background
    surface: "#ffffff",       // Card or panel background
    border: "#e2e8f0",        // Subtle gray border
    text: {
      primary: "#0f172a",     // Default dark text
      secondary: "#475569",   // Muted text
      inverse: "#ffffff",     // For dark backgrounds
    },
  },

  // Spacing scale (useful for consistent padding/margin)
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  //Font sizes and families
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
      hero: "3rem",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Border radius scale
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
    round: "50%",
  },

  // Shadow presets
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.2)",
  },

  // Breakpoints (for responsive design)
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
