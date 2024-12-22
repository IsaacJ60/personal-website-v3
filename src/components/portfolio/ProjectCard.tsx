import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  className,
  colors,
  title = "Project Title",
  description = "A brief description of the project and its key features.",
  imageUrl = "https://dummyimage.com/464x261/e1f5e1/1f8c4f&text=Project+Preview",
  githubUrl = "#",
  liveUrl = "#",
  tags = ["React", "TypeScript", "Tailwind CSS"],
}: ProjectCardProps) => {
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
    <Card
      className={cn(
        "overflow-hidden group transition-all duration-300 ease-in-out h-full",
        "hover:shadow-lg hover:-translate-y-1",
        "relative flex flex-col",
        className,
      )}
      style={
        {
          backgroundColor: bgColor,
          borderColor: borderColor,
          "--shadow-color": primaryColor,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${primaryColor}10 0%, transparent 70%)`,
        }}
      />

      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9} className="bg-[#112240]">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
        <h3
          className="text-xl font-semibold mb-2 transition-colors duration-300"
          style={{ color: secondaryColor }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-2 transition-colors duration-300"
          style={{ color: primaryColor }}
        >
          {description}
        </p>
        </div>

        <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4 align-bottom">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300"
              style={{
                color: primaryColor,
                backgroundColor: `${primaryColor}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm transition-colors duration-300"
              style={{ color: primaryColor }}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm transition-colors duration-300"
              style={{ color: primaryColor }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
