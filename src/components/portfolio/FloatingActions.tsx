import React from "react";
import { cn } from "@/lib/utils";
import ActionButton from "./ActionButton";
import { FileText, Github, Linkedin, Mail, Youtube } from "lucide-react";

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
      href: "https://drive.google.com/file/d/1OJ7T7Lyuj10YFyhx01YfqDykkIRrfNbX/view?usp=sharing",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/IsaacJ60",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isaac6/",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      label: "YouTube",
      href: "https://www.youtube.com/@eyesackle",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:isaac.jiang66@gmail.com",
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
      <>
        {/* Desktop floating actions */}
        <div
          className={cn(
            "fixed right-6 top-1/2 -translate-y-1/2 z-50",
            "hidden md:flex flex-col gap-4",
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
  
        {/* Mobile horizontal buttons */}
        <div className="md:hidden w-full px-6 py-8 flex flex-wrap justify-center gap-4 bg-transparent border-t border-[#4C1D00]">
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full",
                "transition-all duration-300 ease-in-out",
                "hover:-translate-y-1",
              )}
              style={{
                backgroundColor: `rgba(${colors?.primary.r || 100}, ${colors?.primary.g || 181}, ${colors?.primary.b || 246}, 0.1)`,
                color: colors
                  ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
                  : "#64B5F6",
              }}
            >
              {action.icon}
              <span className="text-sm font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </>
    );
  };

export default FloatingActions;
