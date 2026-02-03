'use client';
import React, { useState } from 'react';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/waitinglist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black w-screen min-h-screen flex items-center justify-center px-4">
      <div className=" p-10 rounded-3xl shadow-2xl flex flex-col items-center max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-protest-strike">
          Join the Keysphere Waiting List
        </h1>
        <p className="text-gray-300 mb-6">
          Be the first to get access to our unified API platform. No SDKs, no secrets exposed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-full gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-2xl border-5 border-gray-600 text-white font-poppins flex-1 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-2xl hover:bg-gray-200 transition font-bold"
          >
            {loading ? 'Joining...' : 'Join'}
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 mt-4 text-lg font-semibold">
            🎉 You’re on the waiting list!
            <br/>Waiting list get a promo code to get 3 months free PRO
            
          </p>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default WaitingList;
