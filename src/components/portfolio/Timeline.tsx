import React from "react";
import { cn } from "@/lib/utils";
import TimelineItem from "./TimelineItem";

interface TimelineExperience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

interface TimelineProps {
  className?: string;
  colors?: {
    bg: { r: number; g: number; b: number };
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
    border: { r: number; g: number; b: number };
  };
  experiences?: TimelineExperience[];
}

const Timeline = ({
  className,
  colors,
  experiences = [
    {
      date: "2022 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      description:
        "Leading development of enterprise applications and mentoring junior developers.",
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      description:
        "Developed and maintained multiple client-facing web applications.",
    },
    {
      date: "2018 - 2020",
      title: "Frontend Developer",
      company: "Web Creators Ltd.",
      location: "Boston, MA",
      description:
        "Specialized in creating responsive and accessible user interfaces.",
    },
    {
      date: "2016 - 2018",
      title: "Junior Developer",
      company: "Startup Hub",
      location: "Austin, TX",
      description:
        "Started career working on various web development projects and learning modern technologies.",
    },
  ],
}: TimelineProps) => {
  return (
    <section
      id="experience"
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
          className="text-3xl font-bold mb-12 text-center transition-colors duration-300"
          style={{
            color: colors
              ? `rgb(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b})`
              : "#90CAF9",
          }}
        >
          Experience
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                colors={colors}
                date={experience.date}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
