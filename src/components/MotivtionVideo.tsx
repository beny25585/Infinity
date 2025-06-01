import React from "react";

const MotivationVideo: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute aspect-video top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          allowFullScreen
          title="Motivation Video"
        />
      </div>
    </section>
  );
};

export default MotivationVideo;
