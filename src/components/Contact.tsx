import { useState } from "react";
import { FaUser, FaPhone, FaComments } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formatPhone = (e: string) => {
    let cleaned = e.replace(/\D/g, "");

    if (cleaned.startsWith("0")) {
      return "+972" + cleaned.slice(1);
    }

    return cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        name: name,
        phone: formatPhone(phone),
        message_type: "submission_success",
        api_key: "0548898564",
      });

      const res = await fetch("http://127.0.0.1:8000/api/send-message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const result = await res.json();

      if (res.ok) {
        alert("הטופס נשלח בהצלחה!");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        alert("אירעה שגיאה בשליחת הטופס: " + JSON.stringify(result));
      }
    } catch (error) {
      alert("שגיאה ברשת, אנא נסה שוב.");
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 mx-auto px-6 max-w-7xl z-10">
      <h2 className="text-4xl font-extrabold mb-12 text-center gradient-text text-black">
        צרו קשר
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        <div className="flex items-center gap-3  rounded-xl border border-black-900 p-4">
          <FaUser className="text-black text-xl" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם מלא"
            required
            className="w-full  text-black placeholder-black-400 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-black-900 p-4  direction-rtl">
          <FaPhone className="text-black text-xl" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="מספר טלפון"
            required
            className="w-full text-black placeholder-black-400 outline-none text-right"
          />
        </div>

        <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-600 p-4">
          <FaComments className="text-black text-xl mt-2" />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="הודעה"
            required
            rows={5}
            className="w-full bg-transparent text-black placeholder-gray-400 outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-500 via-sky-400 to-green-500 rounded-3xl text-white font-extrabold text-lg shadow-[0_0_20px_rgba(255,105,180,0.5)] hover:shadow-[0_0_40px_rgba(255,105,180,0.9)] hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50"
        >
          שלח
        </button>
      </form>
    </section>
  );
};

export default Contact;
