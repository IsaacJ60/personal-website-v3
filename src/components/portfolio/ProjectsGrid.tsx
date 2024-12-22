import React from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}

interface ProjectsGridProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  projects?: Project[];
}

const ProjectsGrid = ({
  className,
  colors,
  projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart management and secure checkout.",
      imageUrl: "https://dummyimage.com/464x261/e1f5e1/1f8c4f&text=E-Commerce",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates and team features.",
      imageUrl: "https://dummyimage.com/464x261/e1f5e1/1f8c4f&text=Task+App",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React", "Firebase", "Material-UI"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather forecasting application with interactive maps and detailed analytics.",
      imageUrl: "https://dummyimage.com/464x261/e1f5e1/1f8c4f&text=Weather+App",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React", "OpenWeather API", "Chart.js"],
    },
  ],
}: ProjectsGridProps) => {
  return (
    <section
      id="projects"
      className={cn(
        "py-24 px-6 transition-colors duration-300",
        "relative overflow-hidden",
        className,
      )}
      style={{
        backgroundColor: colors
          ? `rgb(${colors.bg.r}, ${colors.bg.g}, ${colors.bg.b})`
          : "#0A192F",
      }}
    >
      <div className="container mx-auto relative">
        <h2
          className="text-3xl font-bold mb-8 text-center transition-colors duration-300"
          style={{
            color: colors
              ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
              : "#90CAF9",
          }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              colors={colors}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
