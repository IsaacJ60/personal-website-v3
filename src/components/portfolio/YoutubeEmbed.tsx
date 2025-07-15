import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
