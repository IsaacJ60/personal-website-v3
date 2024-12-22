import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionButtonProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  icon?: React.ReactNode;
  label?: string;
  href?: string;
  onClick?: () => void;
}

const ActionButton = ({
  className,
  colors,
  icon = <span>🔗</span>,
  label = "Action",
  href = "#",
  onClick,
}: ActionButtonProps) => {
  const bgColor = colors
    ? `rgb(${colors.bg.r}, ${colors.bg.g}, ${colors.bg.b})`
    : "#0A192F";
  const borderColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.5)`
    : "rgba(100, 181, 246, 0.5)";
  const borderHoverColor = colors
    ? `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, 0.5)`
    : "rgba(144, 202, 249, 0.5)";
  const textColor = colors
    ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
    : "#64B5F6";
  const textHoverColor = colors
    ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
    : "#90CAF9";
  const shadowColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.1)`
    : "rgba(100, 181, 246, 0.1)";
  const shadowHoverColor = colors
    ? `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, 0.2)`
    : "rgba(144, 202, 249, 0.2)";
  const glowColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.15)`
    : "rgba(100, 181, 246, 0.15)";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "w-12 h-12 rounded-full",
              "border-2",
              "shadow-lg hover:shadow-xl",
              "transform transition-all duration-300 ease-in-out",
              "hover:-translate-y-1",
              "relative group",
              className,
            )}
            style={
              {
                backgroundColor: bgColor,
                borderColor: borderColor,
                "--shadow-color": shadowColor,
                "--shadow-hover-color": shadowHoverColor,
                boxShadow: `0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color)`,
              } as React.CSSProperties
            }
            onClick={onClick}
            asChild
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-colors duration-300"
              style={{ color: textColor }}
            >
              {/* Corona effect */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
                }}
              />
              {icon}
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="transition-colors duration-300"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderColor: borderColor,
          }}
        >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionButton;
