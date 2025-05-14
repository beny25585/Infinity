const Team = () => {
  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-bold mb-4">הצוות שלנו</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhaW5lcnxlbnwwfHwwfHx8Mg%3D%3D/300"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">דניאל חסון </h3>
          <p className="text-sm text-gray-400">
            מאמן ותיק בתחום הכושר הקרבי, מנהל מרכזים להכנה לגיבושים ויוצא יחידה
            קרבית.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1667890786327-d28da55b0e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWluZXJ8ZW58MHx8MHx8fDI%3D"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4 object-top"
          />
          <h3 className="text-xl font-semibold mb-2">יובל עילם</h3>
          <p className="text-sm text-gray-400 ">
            מראשוני התחום בארץ, הכין מאות צעירים ליחידות עילית, עם גישה מנטלית
            ופיזית ייחודית.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRyYWluZXJ8ZW58MHx8MHx8fDI%3D"
            alt="מאמן כושר"
            className="w-full h-48 object-cover rounded-lg mb-4  object-[center_50%]"
          />
          <h3 className="text-xl font-semibold mb-2">נועה דביר</h3>
          <p className="text-sm text-gray-400">
            מאמנת כושר קרבי עם ניסיון של מעל 8 שנים בהכנה לגיבושים ויחידות
            מיוחדות. בוגרת יחידת חי"ר לוחמת, מוסמכת באימון פונקציונלי ואימון
            מנטלי ללחץ .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
