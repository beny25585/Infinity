import React from "react";

const MotivationVideo: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-video w-full ">
        <iframe
          className="absolute aspect-video top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/oS0yhfq43dc?rel=0&vq=720p"
          allowFullScreen
          title="Motivation Video"
        />
      </div>
    </section>
  );
};

export default MotivationVideo;
