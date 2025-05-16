const Recommendations = () => {
  // מערך של המלצות עם שם, תמונה ותיאור
  const recommendations = [
    {
      name: "יוסי כהן",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHwy",
      description: "חוויה מדהימה שעזרה לי לעבור את הגיבוש!",
    },
    {
      name: "דני לוי",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHwy",
      description: "תודה רבה על התמיכה וההכנה המצוינת!",
    },
    {
      name: "נועם ישראלי",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHwy",
      description: '"הצוות היה מקצועי ועזר לי להגיע ליחידה שרציתי!"',
    },
  ];

  return (
    <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-bold mb-4 text-center">המלצות</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recommendation, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transition duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-xl"
          >
            <img
              src={recommendation.image}
              className="w-60 mx-auto mb-4"
              alt={`בוגר ${recommendation.name}`}
            />
            <h3 className="text-lg font-semibold text-center mb-2">
              {recommendation.name}
            </h3>
            <p className="text-sm text-gray-300 text-center">
              {recommendation.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
