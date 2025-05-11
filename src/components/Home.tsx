
const Home = () => {
  return (
    <>
     {/* כותרת */}
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">ברוכים הבאים ל-Infinity Kosher</h1>
      <p className="text-lg text-gray-300">
        כאן תוכלו למצוא את כל המידע על האימונים שלנו, המאמנים, והפעילויות המיוחדות.
      </p>
    </div>
        
        <header className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white text-center p-12 shadow-xl">
          <h1 className="text-5xl font-bold">כושר קרבי מנטלי</h1>
          <p className="text-lg mt-4">הגיע הזמן להוציא מעצמך את המקסימום</p>
      </header>
      </>
  );
};

export default Home;