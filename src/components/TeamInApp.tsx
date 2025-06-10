import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TeamInApp = () => {
  return (
    <div className="bg-black/90 relative group overflow-hidden  shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-green-500/40 ">
      <div className="relative z-10 px-8 py-20 text-center text-white">
        <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
            הכירו את הצוות שלנו
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-green-100 mb-10 drop-shadow-lg leading-relaxed max-w-2xl mx-auto font-medium">
          האנשים שמובילים את הלוחמים של מחר –
          <span className="text-green-300 font-semibold">
            {" "}
            בניסיון, ערכים ועוצמה מנטלית
          </span>
        </p>

        <Link
          to="/team"
          className="group/btn relative inline-flex items-center gap-3 bg-green-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-green-400/50 overflow-hidden"
        >
          <span className="relative z-10 text-lg">לצפייה בצוות המלא</span>
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default TeamInApp;
