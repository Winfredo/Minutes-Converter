import React, { useState } from "react";

const App = () => {
  const [days, setDays] = useState("");
  const [hrs, setHrs] = useState("");
  const [minutes, setMinutes] = useState("");
  const [totalMinutes, setTotalMinutes] = useState(0);

  const handleDaysChange = (e) => {
    const value = Math.max(0, e.target.value);
    setDays(value);
  };

  const handleHoursChange = (e) => {
    const value = Math.max(0, e.target.value);
    setHrs(value);
  };

  const handleMinutesChange = (e) => {
    const value = Math.max(0, e.target.value);
    setMinutes(value);
  };

  const handleConvert = () => {
    const total = (days * 1440) + (hrs * 60) + Number(minutes);
    setTotalMinutes(total);
  };

  const handleClear = () => {
    setDays("");
    setHrs("");
    setMinutes("");
    setTotalMinutes(0);
  };

  return (
    <div className="min-h-screen bg-[#c9c9c9] w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-xl text-[#226a9a] mb-16">
          Minutes Converter
        </p>

        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 text-center mb-4">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              value={days}
              onChange={handleDaysChange}
              placeholder="Days"
              className="w-full text-sm lg:text-lg px-2 py-1 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />

            <input
              type="number"
              value={hrs}
              onChange={handleHoursChange}
              placeholder="Hrs"
              className="w-full text-sm lg:text-lg px-2 py-1 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />

            <input
              type="number"
              value={minutes}
              onChange={handleMinutesChange}
              placeholder="Mins"
              className="w-full text-sm lg:text-lg px-2 py-1 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={handleConvert}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition-colors"
          >
            CONVERT
          </button>

          <button
            onClick={handleClear}
            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded transition-colors"
          >
            CLEAR
          </button>
        </div>
        
        <p className="text-center mt-10 text-xl">
          Total Minutes: {totalMinutes}
        </p>
      </div>
    </div>
  );
};

export default App;