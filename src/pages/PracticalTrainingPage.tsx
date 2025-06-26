import "../App.css";
import { Link } from "react-router-dom";


const PracticalTrainingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "900",
              }}
            >
              הדרכה פרקטית מ<span className="text-green-400">InFiniTy</span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "400",
              }}
            >
              הכלים הפרקטיים שיעשו לך את ההבדל
            </p>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-8">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center leading-tight"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "700",
              }}
            >
              הדרכה פרקטית שתבדיל אותך מכל המתחרים שלך
              <br />
              בגיבוש במסלול ובחיים עצמם!
            </h2>
          </div>

          <div className="p-6 md:p-8">
            {/*video1*/}
            <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/video/video1.MP4"
                controls
                preload="metadata"
              >
                הדפדפן שלך לא תומך בוידאו.
              </video>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center leading-tight"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "700",
              }}
            >
              אוקיי אינפיניטי הרשמתם אותי
              <br />
              מה בתכלס המעטפת הכל כך מדוברת שאני מקבל אצליכם בתוך חניך?
            </h2>
          </div>

          <div className="p-6 md:p-8">
            {/* video2*/}
            <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/video/video2.MP4"
                controls
                preload="metadata"
              >
                הדפדפן שלך לא תומך בוידאו.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "800",
            }}
          >
            רוצה להיות הבא?
          </h2>
          <p
            className="text-gray-300 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "400",
            }}
          >
            הצטרף לתכנית InFiniTy והפוך גם אתה לסיפור הצלחה
          </p>
          <Link
            to="/Contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 md:py-5 px-8 md:px-12 rounded-2xl md:rounded-3xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "700",
            }}
          >
            להרשמה לחצו כאן
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PracticalTrainingPage;
