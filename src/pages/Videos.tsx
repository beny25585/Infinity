import VideoCarousel from "../components/VideoCarousel";

const VideosPage = () => (
  <div className="bg-black min-h-screen p-8 font-hebrew direction-rtl">
    <h1 className="text-4xl text-center text-white font-bold mb-8">
      סרטוני מוטיבציה
    </h1>
    <div className="max-w-4xl mx-auto">
      <VideoCarousel />
    </div>
  </div>
);

export default VideosPage;
