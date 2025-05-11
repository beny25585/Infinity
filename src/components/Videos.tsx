import Navbar from './Navbar';
import Footer from './Footer';

const Videos = () => {
    
    return (
        <div className="bg-white min-h-screen p-8 font-hebrew direction-rtl">
        <Navbar />
      <h1 className="text-4xl text-center text-green-600 font-bold mb-8">סרטונים</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/XXXXX"
          title="סרטון 1"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/YYYYY"
          title="סרטון 2"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;