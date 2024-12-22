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
      date: "December 2024 - Present",
      title: "CxC Coordinator",
      company: "University of Waterloo Data Science Club",
      location: "Waterloo, ON",
      description:
        "Organized hacker logistics, dealing with distribution of information (handbooks, application questions, judging criteria, etc.) and creating/managing the Discord server and Devpost page.",
    },
    {
      date: "June 2023 – Aug. 2023",
      title: "Research Intern",
      company: "University of Windsor",
      location: "Windsor, ON",
      description:
        "Used NumPy and Pandas to implement new code for ReQue, a benchmark workflow and dataset collection for Query Refinement, to measure the efficacy of a new backtranslation expander.",
    },
    {
      date: "April 2023 – Aug. 2023",
      title: "Data Science Intern",
      company: "Riverside Minor Baseball Association",
      location: "Windsor, ON",
      description:
        "Used React, MySQL, and Express.js to create a player management system, increasing player data retrieval speed by 200%. Automated and managed rosters and schedules for 6 age groups, totaling to 30+ teams and 360+ players",
    },
    {
      date: "June 2023 – July 2023",
      title: "Co-Founder",
      company: "CodeQuest",
      location: "Windsor, ON",
      description:
        "Organized a week-long summer camp teaching Grade 5-8 students the fundamentals of problem solving and coding in Python with the graphics library Pygame",
    },
    {
      date: "Sept. 2023 – June 2024",
      title: "Computer Science Instructor",
      company: "Vincent Massey Computer Science Club",
      location: "Windsor, ON",
      description:
        "Created lesson plans in Python to teach algorithms and data structures such as breadth-first search, recursion, arrays, hash-maps, and strings to 30+ students",
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
