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
      title: "The Bigger Picture.",
      description:
        "An online photo mosaic generator that allows users to collaboratively prepare and render stunning mosaics.",
      imageUrl: "https://cdn.dorahacks.io/static/files/1947da8fb2dac26bc47d6e94f249987f.png",
      githubUrl: "https://github.com/IsaacJ60/uofthacks-12",
      liveUrl: "https://dorahacks.io/buidl/21598",
      tags: ["Amazon S3", "mySQL", "Vue.js", "Flask", "Python"],
    },
    {
      title: "EcoDash",
      description:
        "A full-stack application that empowers users to take action on world issues through up-to-date information on global developments relating to the UN's 17 sustainable development goals.",
      imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/209/324/datas/medium.png",
      githubUrl: "https://github.com/IsaacJ60/DeltaHacks-2025",
      liveUrl: "https://devpost.com/software/environmental-development-kit",
      tags: ["Vue.js", "Flask", "Selenium", "Python", "Git", "Cohere API"],
    },
    {
      title: "HealthScreen",
      description:
        "A medical screening application for patient use in free clinics in Detroit, MI, for an under-served patient population.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/healthscreen.png",
      githubUrl: "https://github.com/IsaacJ60/HealthScreen",
      liveUrl: "#",
      tags: ["Firebase", "Flutter", "Dart"],
    },
    {
      title: "PowerNote",
      description:
        "An AI-powered flashcard and note generator.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/powernote.png",
      githubUrl: "https://github.com/IsaacJ60/masseyhacksIX",
      liveUrl: "https://devpost.com/software/powernote-ehybsv",
      tags: ["Java Swing", "Python", "Apache POI", "OpenAI API"],
    },
    {
      title: "KanBoy",
      description:
        "The only Discord-based Kanban board you'll ever need.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/kanboy.png",
      githubUrl: "https://github.com/IsaacJ60/kanboy",
      liveUrl: "https://devpost.com/software/kanboy",
      tags: ["React", "Discord API", "Python"],
    },
    {
      title: "Alan's Adventure",
      description:
        "A Downwell-inspired game made purely in Java Swing.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/alansadventure.png",
      githubUrl: "https://github.com/IsaacJ60/alanadventure",
      liveUrl: "#",
      tags: ["Java Swing", "Game Development"],
    },
    {
      title: "FyLy",
      description:
        "An AI-powered file organizer and command line application.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/fyly.png",
      githubUrl: "https://github.com/IsaacJ60/hackthe6ix2023",
      liveUrl: "https://devpost.com/software/fyly",
      tags: ["Taipy", "Python Click", "OpenAI API"],
    },
    {
      title: "SideSchedule",
      description:
        "An AI-powered scheduler app, with Google Calendar integration.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/sideschedule.png",
      githubUrl: "https://github.com/IsaacJ60/side-schedule",
      liveUrl: "https://devpost.com/software/sideschedule",
      tags: ["React", "Discord API", "Python"],
    },
    {
      title: "SurveyScreen",
      description:
        "An AI-powered general health screening tool, made as a web variant/prototype to HealthScreen.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/surveyscreen.png",
      githubUrl: "https://github.com/IsaacJ60/surveyscreen",
      liveUrl: "https://devpost.com/software/surveyscreen",
      tags: ["React"],
    },
    {
      title: "Arkanoid",
      description:
        "A remake of the classic Arkanoid game, made purely in Java Swing.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/arkanoid.png",
      githubUrl: "https://github.com/IsaacJ60/arkanoid",
      liveUrl: "#",
      tags: ["Java Swing", "Game Development"],
    },
    {
      title: "PAINT (AoT Edition)",
      description:
        "A reacreation of the classic MS Paint, with an Attack on Titan twist.",
      imageUrl: "https://raw.githubusercontent.com/IsaacJ60/personal-website-v3/refs/heads/master/src/images/aotpaint.png",
      githubUrl: "https://github.com/IsaacJ60/aotpaintfinal",
      liveUrl: "#",
      tags: ["Python", "Pygame"],
    },
  ],
}: ProjectsGridProps) => {
  return (
    <section
      id="projects"
      className={cn(
        "py-12 px-6 transition-colors duration-300",
        "overflow-hidden",
        className,
      )}
      style={{
        
      }}
    >
      <div className="container mx-auto relative">
        <h2
          className="text-3xl font-bold mb-10 text-center transition-colors duration-300"
          style={{
            color: colors
              ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
              : "#90CAF9",
          }}
        >
          Projects
        </h2>

        <div className="z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
