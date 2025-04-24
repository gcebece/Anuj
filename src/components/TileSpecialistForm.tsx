import { useState } from 'react';

export const TileSpecialistForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', { fullName, phoneNumber });
    setFullName('');
    setPhoneNumber('');
  };

  return (
    <div
      className="py-16 flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, #ffcdb2, #ffb4a2, #e5989b, #ffb5bc, #ffafbe)',
      }}
    >
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-2xl mx-0">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Talk with our Tile Specialist
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Your Full name*"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-600 placeholder-gray-400"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number*"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-600 placeholder-gray-400"
              required
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-14 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TileSpecialistForm; 