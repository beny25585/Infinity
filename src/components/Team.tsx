import Footer from "./Footer";
import Navbar from "./Navbar";

const Team = () => {
  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg mb-8">
      <Navbar />
      <h2 className="text-3xl font-bold mb-4">הצוות שלנו</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">שם המאמן</h3>
          <p className="text-sm text-gray-400">
            מאמן כושר אישי עם ניסיון של 10 שנים בתחום האימונים הקרביים.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">שם המאמן</h3>
          <p className="text-sm text-gray-400">
            מאמן כושר אישי עם ניסיון של 10 שנים בתחום האימונים הקרביים.
          </p>
        </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">שם המאמן</h3>
          <p className="text-sm text-gray-400">
            מאמן כושר אישי עם ניסיון של 10 שנים בתחום האימונים הקרביים.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Team;