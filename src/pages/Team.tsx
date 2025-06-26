import { teamData } from "../data/teamData";

const Team = () => {
  return (
    <section className="bg-gray-300 py-6 md:py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with styled title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white bg-green-800 py-4 md:py-6 px-6 md:px-10 rounded-2xl inline-block border border-white">
              הצוות שלנו
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed px-2 max-w-3xl mx-auto">
            הצוות שלנו כולל מדריכים מנוסים, בעלי רקע קרבי עשיר ושנות ניסיון רבות
            בהכנה מקצועית ליחידות המובחרות בצה״ל, תוך שילוב בין אימון פיזי מתקדם
            לפיתוח חוסן מנטלי, יכולות מנטליות מתקדמות, ועמידה באתגרים תחת לחץ –
            כבסיס להצלחה בשירות הקרבי ובחיים בכלל{" "}
          </p>
        </div>

        {/* Team Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 lg:h-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full ${member.imageStyle}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                  {member.name}
                </h3>
                <div className="text-green-400 text-sm font-semibold mb-3">
                  {member.title}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
