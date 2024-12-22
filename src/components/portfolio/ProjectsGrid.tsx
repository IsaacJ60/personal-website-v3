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
      title: "HealthScreen",
      description:
        "A medical screening application for patient use in free clinics in Detroit, MI, for an under-served patient population.",
      imageUrl: "/images/healthscreen.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Firebase", "Flutter", "Dart"],
    },
    {
      title: "PowerNote",
      description:
        "An AI-powered flashcard and note generator.",
      imageUrl: "/images/powernote.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Java Swing", "Python", "Apache POI", "OpenAI API"],
    },
    {
      title: "KanBoy",
      description:
        "The only Discord-based Kanban board you'll ever need.",
      imageUrl: "/images/kanboy.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React", "Discord API", "Python"],
    },
    {
      title: "Alan's Adventure",
      description:
        "A Downwell-inspired game made purely in Java Swing.",
      imageUrl: "/images/alansadventure.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Java Swing", "Game Development"],
    },
    {
      title: "FyLy",
      description:
        "An AI-powered file organizer and command line application.",
      imageUrl: "/images/fyly.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Taipy", "Python Click", "OpenAI API"],
    },
    {
      title: "SideSchedule",
      description:
        "An AI-powered scheduler app, with Google Calendar integration.",
      imageUrl: "/images/sideschedule.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React", "Discord API", "Python"],
    },
    {
      title: "SurveyScreen",
      description:
        "An AI-powered general health screening tool, made as a web variant/prototype to HealthScreen.",
      imageUrl: "/images/surveyscreen.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["React"],
    },
    {
      title: "Arkanoid",
      description:
        "A remake of the classic Arkanoid game, made purely in Java Swing.",
      imageUrl: "/images/arkanoid.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Java Swing", "Game Development"],
    },
    {
      title: "PAINT (AoT Edition)",
      description:
        "A reacreation of the classic MS Paint, with an Attack on Titan twist.",
      imageUrl: "/images/aotpaint.png",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["Python", "Pygame"],
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
