const Recommendations = () => {
  const recommendations = [
    {
      name: "יוסי כהן",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60",
      description: "חוויה מדהימה שעזרה לי לעבור את הגיבוש!",
    },
    {
      name: "דני לוי",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60",
      description: "תודה רבה על התמיכה וההכנה המצוינת!",
    },
    {
      name: "נועם ישראלי",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      description: "הצוות היה מקצועי ועזר לי להגיע ליחידה שרציתי!",
    },
  ];

  return (
    <section className=" bg-[var(--bg-dark)] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center gradient-text">
          המלצות
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center 
                         hover:scale-105 hover:shadow-[0_10px_30px_rgb(59,130,246,0.7)] transition-transform duration-300"
            >
              <img
                src={rec.image}
                alt={`בוגר ${rec.name}`}
                className="w-32 h-32 rounded-full mb-6 border-4 border-[var(--primary)] object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{rec.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
