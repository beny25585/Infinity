
import { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('הטופס נשלח בהצלחה!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    
        <section className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-16">
          <h2 className="text-3xl text-green-600 text-center mb-6">השאירו פרטים </h2>
          <form onSubmit={submitForm} className="text-center space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="שם מלא"
              required
              className=" bg-white w-full p-4 rounded-lg text-black"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="אימייל"
              required
              className="bg-white w-full p-4 rounded-lg text-black"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="הודעה"
              required
              className="bg-white w-full p-4 rounded-lg text-black"
            ></textarea>
            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              שלח
            </button>
          </form>
        </section>
      </>
  );
};

export default Contact;