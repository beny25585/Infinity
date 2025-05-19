import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("הטופס נשלח בהצלחה!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-[var(--bg-dark)] text-white px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 gradient-text">
        השאירו פרטים
      </h2>
      <form
        onSubmit={submitForm}
        className="max-w-lg mx-auto space-y-8 bg-gray-900 p-10 rounded-3xl shadow-lg"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם מלא"
          required
          className="w-full p-4 rounded-xl text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-inner"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="אימייל"
          required
          className="w-full p-4 rounded-xl  border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-inner"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="הודעה"
          required
          rows={5}
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-inner resize-none"
        ></textarea>
        <button
          type="submit"
          className="
    w-full
    py-4
    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
    rounded-3xl
    text-white
    font-extrabold
    text-lg
    shadow-lg
    hover:shadow-2xl
    hover:scale-105
    transform
    transition
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-4
    focus:ring-pink-400
    focus:ring-opacity-50
  "
        >
          שלח
        </button>
      </form>
    </section>
  );
};

export default Contact;
