import React from "react";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";

interface HeroSectionProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  name?: string;
  title?: string;
  subtitle?: string;
  avatarProps?: React.ComponentProps<typeof Avatar>;
  style?: React.CSSProperties;
}

const HeroSection = ({
  className,
  colors,
  name = "Isaac Jiang",
  title = "Full Stack Developer",
  subtitle = "Computer Science @ University of Waterloo",
  avatarProps,
  style,
}: HeroSectionProps) => {
  const primaryColor = colors
    ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
    : "#64B5F6";
  const secondaryColor = colors
    ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
    : "#90CAF9";

  return (
    <section
      className={cn(
        "min-h-[480px] flex items-center justify-center px-6",
        "relative overflow-hidden",
        "pt-24",
        "transition-colors duration-300",
        className,
      )}
      style={style}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar {...avatarProps} colors={colors} />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-colors duration-300"
            style={{ color: secondaryColor }}
          >
            {name}
          </h1>
          <h2
            className="text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p className="text-lg text-blue-100 max-w-lg" style={{ paddingBottom: "20px" }}>{subtitle}</p>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
