const MotivationVideo = () => {
  return (
    <>
      {/* וידאו מוטיבציה */}
      <div className="video-container ">
        <iframe
          className="w-full h-90 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/-keL1hpquU0"
          title="סרטון מוטיבציה"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default MotivationVideo;
