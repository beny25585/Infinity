import Navbar from './Navbar';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  return (
    <div className="bg-white min-h-screen font-hebrew direction-rtl">
      <Navbar />
      <main className="p-8 mt-8 max-w-4xl mx-auto">
        <h1 className="text-4xl text-center text-green-600 font-bold mb-8">גלריה</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`תמונה ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;