import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../constants/theme";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Businesses", path: "/ourbusinesses" },
    { name: "News", path: "/News" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: scrolled
          ? theme.colors.primaryDark
          : theme.colors.primary,
        boxShadow: scrolled ? theme.shadow.md : "none",
        transition: theme.transition.base,
        fontFamily: theme.typography.fontFamily,
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
          maxWidth: theme.spacing.container,
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          style={{
            color: theme.colors.text.inverse,
            fontWeight: theme.typography.weight.bold,
            fontSize: theme.typography.sizes.lg,
            textDecoration: "none",
            letterSpacing: "0.5px",
          }}
        >
          CVA Group
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: theme.colors.text.inverse,
            fontSize: "1.6rem",
            cursor: "pointer",
          }}
          className="hamburger"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul
          style={{
            display: "flex",
            gap: theme.spacing.lg,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-menu"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: theme.colors.text.inverse,
                    fontWeight: isActive
                      ? theme.typography.weight.semibold
                      : theme.typography.weight.regular,
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.accent}`
                      : "2px solid transparent",
                    transition: theme.transition.base,
                    textDecoration: "none",
                    paddingBottom: "2px",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: theme.spacing.md,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.md,
            backgroundColor: theme.colors.primaryDark,
            animation: "slideDown 0.3s ease",
          }}
          className="mobile-menu"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: theme.colors.text.inverse,
                    fontWeight: isActive
                      ? theme.typography.weight.semibold
                      : theme.typography.weight.regular,
                    textDecoration: "none",
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.accent}`
                      : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* Responsive Styling */}
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Hide desktop menu on mobile */
          @media (max-width: ${theme.breakpoints.md}) {
            .desktop-menu {
              display: none;
            }
          }

          /* Hide mobile menu on desktop */
          @media (min-width: ${theme.breakpoints.md}) {
            .mobile-menu, .hamburger {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
