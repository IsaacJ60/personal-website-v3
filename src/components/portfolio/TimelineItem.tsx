import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  date?: string;
  title?: string;
  company?: string;
  location?: string;
  description?: string;
}

const TimelineItem = ({
  className,
  colors,
  date = "2022 - Present",
  title = "Senior Developer",
  company = "Tech Company",
  location = "San Francisco, CA",
  description = "Led development of key features and mentored junior developers while implementing best practices and modern technologies.",
}: TimelineItemProps) => {
  // Make background slightly darker by reducing RGB values by 15
  const bgColor = colors
    ? `rgb(${Math.max(0, colors.bg.r - 15)}, ${Math.max(0, colors.bg.g - 15)}, ${Math.max(0, colors.bg.b - 15)})`
    : "#071526";
  const borderColor = colors
    ? `rgb(${colors.border.r}, ${colors.border.g}, ${colors.border.b})`
    : "#112240";
  const primaryColor = colors
    ? `rgb(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b})`
    : "#64B5F6";
  const secondaryColor = colors
    ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
    : "#90CAF9";

  return (
    <div className="flex gap-4 items-center">
      {/* Date column */}
      <div className="w-32 flex-shrink-0 text-right">
        <span
          className="text-sm font-medium transition-colors duration-300"
          style={{ color: primaryColor }}
        >
          {date}
        </span>
      </div>

      {/* Content */}
      <Card
        className={cn(
          "flex-grow border-l-4",
          "transform transition-all duration-300 ease-in-out",
          "hover:shadow-lg hover:-translate-y-1",
          "group relative",
          className,
        )}
        style={
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
            borderLeftColor: primaryColor,
            "--shadow-color": `${primaryColor}10`,
          } as React.CSSProperties
        }
      >
        {/* Corona effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${primaryColor}10 0%, transparent 70%)`,
          }}
        />

        <CardContent className="p-4">
          <h3
            className="text-lg font-semibold mb-1 transition-colors duration-300"
            style={{ color: secondaryColor }}
          >
            {title}
          </h3>
          <div
            className="text-sm font-medium mb-1 transition-colors duration-300"
            style={{ color: primaryColor }}
          >
            {company}
          </div>

          <div
            className="flex items-center gap-1 text-sm mb-2 transition-colors duration-300"
            style={{ color: primaryColor }}
          >
            <span className="w-4 h-4">📍</span>
            <span>{location}</span>
          </div>

          <p
            className="text-sm transition-colors duration-300"
            style={{ color: primaryColor }}
          >
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineItem;
