import React from "react";
import { cn } from "@/lib/utils";
import ActionButton from "./ActionButton";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

interface FloatingActionsProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  actions?: Array<{
    icon: React.ReactNode;
    label: string;
    href: string;
  }>;
}

const FloatingActions = ({
  className,
  colors,
  actions = [
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Resume",
      href: "#resume",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:contact@example.com",
    },
  ],
}: FloatingActionsProps) => {
  const bgColor = colors
    ? `rgba(${Math.max(0, colors.bg.r - 15)}, ${Math.max(0, colors.bg.g - 15)}, ${Math.max(0, colors.bg.b - 15)}, 0.8)`
    : "rgba(7, 21, 38, 0.8)";
  const borderColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.2)`
    : "rgba(100, 181, 246, 0.2)";
  const shadowColor = colors
    ? `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.1)`
    : "rgba(100, 181, 246, 0.1)";

  return (
    <div
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50",
        "flex flex-col gap-4",
        "backdrop-blur-sm rounded-full py-4 px-2",
        "transition-all duration-300",
        className,
      )}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -2px ${shadowColor}`,
      }}
    >
      {actions.map((action, index) => (
        <ActionButton
          key={index}
          colors={colors}
          icon={action.icon}
          label={action.label}
          href={action.href}
        />
      ))}
    </div>
  );
};

export default FloatingActions;
