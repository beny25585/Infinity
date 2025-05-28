const MotivationVideo = () => {
  return (
    <div className="relative w-full pt-[56.25%] rounded-xl shadow-lg overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src="https://drive.google.com/file/d/1_CwZ9IM2DglurDmZd0zpqatXhkmLG3Sg/view?usp=sharing"
        title="סרטון מוטיבציה"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default MotivationVideo;
