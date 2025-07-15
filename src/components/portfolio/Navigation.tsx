import React from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  links?: Array<{
    href: string;
    label: string;
  }>;
}

const Navigation = ({
  className,
  colors,
  links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "/story", label: "Story" }
  ],
}: NavigationProps) => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bgColor = colors
    ? `rgba(${colors.bg.r}, ${colors.bg.g}, ${colors.bg.b}, 0.8)`
    : "rgba(3, 7, 18, 0.8)";
  const borderColor = colors
    ? `rgb(${colors.border.r}, ${colors.border.g}, ${colors.border.b})`
    : "rgb(31, 41, 55)";
  const textColor = colors
    ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
    : "rgb(156, 163, 175)";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ease-in-out",
        className,
      )}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-center">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative py-2 px-4 rounded-xl", // Add padding and rounded corners
                  link.label === "Story" && "bg-opacity-25 hover:bg-opacity-50", // Special styling for "Creations"
                )}
                style={{ color: textColor, backgroundColor: link.label === "Story" ? borderColor : "transparent" }} // Customize the color for "Creations"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
