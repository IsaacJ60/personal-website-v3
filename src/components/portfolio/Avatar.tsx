import React from "react";
import { cn } from "@/lib/utils";
import {
  Avatar as AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
}

const Avatar = ({
  src = "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/isaac.png",
  alt = "Profile Picture",
  className,
  fallback = "IJ",
  colors,
}: AvatarProps) => {
  const bgColor = colors
    ? `rgb(${colors.bg.r}, ${colors.bg.g}, ${colors.bg.b})`
    : "#0A192F";
  const primaryColor = colors
    ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
    : "#64B5F6";
  const secondaryColor = colors
    ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
    : "#90CAF9";
    const borderColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.3)`
    : "rgb(20, 129, 218)";
  const glowColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.2)`
    : "rgba(100, 181, 246, 0.2)";
  const glowHoverColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.3)`
    : "rgba(100, 181, 246, 0.3)";
  const shadowColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.3)`
    : "rgba(100, 181, 246, 0.3)";
  const shadowHoverColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.4)`
    : "rgba(100, 181, 246, 0.4)";

  return (
    <div className="relative group">
      {/* Corona effect - outer glow */}
      <div
        className="absolute -inset-3 rounded-full blur-3xl group-hover:opacity-30 transition-all duration-500"
        style={{
          backgroundColor: primaryColor,
          opacity: 0.2,
        }}
      />

      <div
        className={cn(
          "w-48 h-48 rounded-full overflow-hidden relative",
          "transition-all duration-500 ease-in-out",
          "group-hover:scale-105",
          className,
        )}
        style={
          {
            backgroundColor: borderColor,
            borderWidth: 4,
            borderColor: borderColor,
            boxShadow: `0 0 50px ${shadowColor}`,
            "--hover-border-color": secondaryColor,
            "--hover-shadow-color": shadowHoverColor,
          } as React.CSSProperties
        }
      >
        <AvatarRoot className="w-full h-full">
          <AvatarImage
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <AvatarFallback
            className="w-full h-full flex items-center justify-center text-3xl font-bold transition-colors duration-300"
            style={{
              backgroundColor: bgColor,
              color: primaryColor,
            }}
          >
            {fallback}
          </AvatarFallback>
        </AvatarRoot>
      </div>

      {/* Inner corona effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          "transition-all duration-500 ease-in-out",
          "pointer-events-none",
          "group-hover:opacity-100 opacity-70",
        )}
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default Avatar;
