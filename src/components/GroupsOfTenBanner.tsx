const GroupsOfTenBanner = () => {
  return (
    <div className="py-6 px-4 shadow-lg border-t border-green-500">
      <div className="max-w-6xl mx-auto" dir="rtl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="text-center md:text-right flex-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 drop-shadow-md">
              קבוצות בפריסה ארצית
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-semibold drop-shadow-sm">
              החל מ-10 חניכים ומעלה
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              אין באזור שלכם קבוצה? צרו קבוצה ואנחנו נגיע אליכם!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsOfTenBanner;
