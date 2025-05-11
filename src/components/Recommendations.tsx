const Recommendations = () => {
  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-bold mb-4 text-center">המלצות</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["יוסי כהן", "דני לוי", "נועם ישראלי"].map((name, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transition duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-xl"
          >
            <img
              src={`https://via.placeholder.com/100?text=User+${index + 1}`}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt={`בוגר ${name}`}
            />
            <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
            <p className="text-sm text-gray-300 text-center">
              "חוויה מדהימה שעזרה לי לעבור את הגיבוש!"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
