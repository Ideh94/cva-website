
/**
 * homeStyles.js
 *
 * This file centralizes all the styling for the Home page.
 * Each section/component (Hero, About, Features, Testimonials, Blog, etc.)
 * has its own style object, e.g., s.hero, s.featureList, s.blogPostCard.
 *
 * Usage:
 *   import { homeStyles as s } from "../constants/homeStyles";
 *   <div style={s.hero}>...</div>
 *
 * Hover/interactive styles can be applied by merging objects:
 *   style={{ ...s.heroCTA.base, ...(isHovered ? s.heroCTA.hover : {}) }}
 *
 * Responsive helpers are included, e.g., s.blogListResponsive(windowWidth).
 * All visual settings (colors, spacing, shadows, animations) are maintained here.
 *
 * Purpose: Keep all Home page styles in one place for easy maintenance and consistency.
 */


import { theme } from "./theme";

export const homeStyles = {
  container: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.background,
  },




  // =====================
  // Hero Section
  // =====================
  hero: {
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      ${theme.utils.heroOverlay},
      url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1600&q=80')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.6) contrast(1.1)",
    animation: "zoomBackground 20s ease-in-out infinite alternate",
    zIndex: 0,
  },
  heroContent: {
    maxWidth: "800px",
    zIndex: 2,
    animation: "fadeInUp 1.5s ease-out forwards",
  },
  heroTitle: {
    fontSize: theme.typography.sizes.hero,
    fontWeight: theme.typography.weight.bold,
    marginBottom: theme.spacing.md,
    color: theme.colors.text.inverse,
    lineHeight: 1.2,
  },
  heroAccentText: {
    color: theme.colors.accent,
    textShadow: "0 0 12px rgba(0,224,255,0.4)",
  },
  heroParagraph: {
    fontSize: theme.typography.sizes.lg,
    marginBottom: theme.spacing.xl,
    color: "rgba(255,255,255,0.92)",
    maxWidth: "700px",
    marginInline: "auto",
  },
  heroCTAone: {
    base: {
      display: "inline-block",
      background: theme.buttons.accent.background,
      color: theme.buttons.accent.color,
      padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
      borderRadius: theme.radius.lg,
      fontWeight: theme.typography.weight.semibold,
      textDecoration: "none",
      boxShadow: theme.buttons.accent.boxShadow,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      marginRight: 20,
    },
    hover: {
      transform: "translateY(-3px)",
      boxShadow: "0 14px 32px rgba(0,198,255,0.5)",
    },
  },
  heroCTAtwo: {
    base: {
      display: "inline-block",
      background: theme.buttons.secondary.background,
      color: theme.buttons.color,
      padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
      borderRadius: theme.radius.lg,
      fontWeight: theme.typography.weight.semibold,
      textDecoration: "none",
      boxShadow: theme.buttons.accent.boxShadow,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    hover: {
      transform: "translateY(-3px)",
      boxShadow: "0 14px 32px rgba(0,198,255,0.5)",
    },
  },
  heroFadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "150px",
    background: "linear-gradient(to top, rgba(3,31,54,0.9), transparent)",
    zIndex: 1,
  },

  // =====================
  // About Section
  // =====================
  aboutSection: {
    padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
    textAlign: "center",
    backgroundColor: theme.colors.surface,
    position: "relative",
  },
  aboutText: {
    maxWidth: "720px",
    margin: "0 auto",
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.secondary,
    lineHeight: 1.7,
    marginBottom: theme.spacing.md,
  },
  sectionDivider: {
    width: "80px",
    height: "4px",
    backgroundColor: theme.colors.accent,
    margin: `0 auto ${theme.spacing.lg} auto`,
    borderRadius: theme.radius.round,
  },
  aboutLink: {
    color: theme.colors.accent,
    fontWeight: theme.typography.weight.semibold,
    textDecoration: 'none',
    alignSelf: 'flex-start',
    transition: 'color 0.3s ease',
    ':hover': {
      color: theme.colors.accentLight,
    },
  },

  // =====================
  // Our Businesses Section
  // =====================
  ourbusinessesSection: {
    padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
    textAlign: "center",
    backgroundColor: theme.colors.surface,
    position: "relative",
  },
  ourbusinessesText: {
    maxWidth: "720px",
    margin: "0 auto",
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.secondary,
    lineHeight: 1.7,
    marginBottom: theme.spacing.md,
  },
  sectionDivider: {
    width: "80px",
    height: "4px",
    backgroundColor: theme.colors.accent,
    margin: `0 auto ${theme.spacing.lg} auto`,
    borderRadius: theme.radius.round,
  },
  ourbusinessesLink: {
    color: theme.colors.accent,
    fontWeight: theme.typography.weight.semibold,
    textDecoration: 'none',
    alignSelf: 'flex-start',
    transition: 'color 0.3s ease',
    ':hover': {
      color: theme.colors.accentLight,
    },
  },

  // =====================
  // Features Section
  // =====================
  featuresSection: {
    padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
    backgroundColor: theme.colors.background,
  },
  featureList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: theme.spacing.xl,
    maxWidth: "1200px",
    margin: "0 auto",
  },
  featureItem: {
    base: {
      backgroundColor: theme.colors.surface,
      boxShadow: theme.shadow.md,
      padding: theme.spacing.xl,
      textAlign: "center",
      transition: "all 0.35s ease",
      cursor: "default",
      borderRadius: theme.radius.lg,
    },
    hover: {
      transform: "translateY(-8px)",
      boxShadow: theme.shadow.lg,
      borderColor: theme.colors.accent,
    },
  },
  featureIcon: {
    fontSize: "2rem",
    marginBottom: theme.spacing.md,
  },
  featureTitle: {
    color: theme.colors.primary,
    fontSize: theme.typography.sizes.lg,
    marginBottom: theme.spacing.sm,
    fontWeight: 600,
  },
  featureText: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.sizes.base,
    lineHeight: 1.6,
    maxWidth: "90%",
    margin: "0 auto",
  },

  // =====================
  // Testimonials Section
  // =====================
  testimonialsContainer: {
    background: theme.utils.accentGradient,
    color: theme.colors.text.inverse,
    padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  testimonialSlider: {
    display: "flex",
    transition: "transform 0.8s ease-in-out",
  },
  testimonialCard: {
    base: {
      flex: "0 0 50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.surface,
      color: theme.colors.text.primary,
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadow.lg,
      padding: theme.spacing.xl,
      margin: theme.spacing.md,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
  },
  testimonialAvatar: {
    width: "90px",
    height: "90px",
    borderRadius: theme.radius.round,
    objectFit: "cover",
    border: `3px solid ${theme.colors.accent}`,
    marginBottom: theme.spacing.md,
  },
  testimonialText: {
    fontStyle: "italic",
    fontSize: theme.typography.sizes.md,
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },
  testimonialAuthor: {
    fontWeight: theme.typography.weight.semibold,
    color: theme.colors.accent,
    fontSize: theme.typography.sizes.lg,
  },
  testimonialDotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  testimonialDot: {
    width: "12px",
    height: "12px",
    borderRadius: theme.radius.round,
    cursor: "pointer",
    transition: theme.transition.base,
    activeColor: theme.colors.accent,
    inactiveColor: "rgba(255,255,255,0.4)",
  },

  testimonialButton: {
    base: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(59, 130, 246, 0.7)", // semi-transparent blue
      border: "none",
      color: theme.colors.surface,
      width: "40px",
      height: "40px",
      borderRadius: theme.radius.sm,
      cursor: "pointer",
      fontSize: theme.typography.sizes.lg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: `all ${theme.transition.fast}`,
      zIndex: 10,
    },
    hover: {
      backgroundColor: theme.colors.accent, // full accent color
      transform: "translateY(-50%) scale(1.15)",
    },
    left: {
      left: "10px", // outside left edge
    },
    right: {
      right: "10px", // outside right edge
    },
    responsive: {
      // reduce size on small screens
      "@media (max-width: 640px)": {
        width: "32px",
        height: "32px",
        fontSize: theme.typography.sizes.md,
        left: "-10px",
        right: "-10px",
      },
    },
  },



  // =====================
  // Blog Section
  // =====================
  blogSection: {
    padding: `${theme.spacing.xxl} 0`,
    backgroundColor: theme.colors.canvas,
    textAlign: "center",
  },


  blogListResponsive: (width) => ({
    display: "grid",
    gridTemplateColumns: width < 768 ? "1fr" : "repeat(3, 1fr)",
    gap: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    padding: `0 ${theme.spacing.md}`,
  }),

  blogPostCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadow.md,
    transition: `transform ${theme.transition.base}, box-shadow ${theme.transition.base}`,
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadow.lg,
    },
  },

  blogPostTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weight.semibold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.primaryDark,
  },

  blogPostText: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.secondary,
    lineHeight: 1.6,
    marginBottom: theme.spacing.md,
  },

  blogPostLink: {
    color: theme.colors.accent,
    fontWeight: theme.typography.weight.medium,
    textDecoration: "none",
    transition: `color ${theme.transition.fast}`,
    ":hover": {
      color: theme.colors.accentDark,
    },
  },
  blogPostImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: `${theme.radius.md} ${theme.radius.md} 0 0`,
    marginBottom: theme.spacing.md,
  },


  // =====================
  // footer Section
  // =====================

  footer: {
    backgroundColor: theme.colors.primaryDark,
    color: theme.colors.text.inverse,
    padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: theme.spacing.container,
    margin: '0 auto',
    gap: theme.spacing.xl,
  },
  footerColumn: {
    flex: '1 1 250px',
    marginBottom: theme.spacing.lg,
  },
  footerTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weight.bold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.accent,
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    fontSize: theme.typography.sizes.md,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.secondary,
  },
  socialIcons: {
    display: 'flex',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  socialLink: {
    color: theme.colors.accent,
    fontSize: '1.25rem',
    transition: theme.transition.base,
    ':hover': {
      color: theme.colors.accentDark,
    },
  },
  searchBox: {
    marginTop: theme.spacing.md,
  },
  searchInput: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colors.border}`,
    width: '100%',
    fontSize: theme.typography.sizes.md,
  },




};

export const homeAnimations = `
@keyframes fadeInUp {
  from { opacity:0; transform: translateY(20px); }
  to { opacity:1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity:0; }
  to { opacity:1; }
}
@keyframes zoomBackground {
  0% { transform: scale(1.05); }
  100% { transform: scale(1.1); }
}
`;