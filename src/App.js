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
    <div className="w-full h-[100vh] bg-[#c9c9c9]">
      <div className="lg:max-w-[1250px] mx-auto flex flex-col overflow-hidden">
        <p className="text-center text-[20px] text-[#226a9a] mt-5">
          Minutes Converter
        </p>
        <div className="mt-[150px] overflow-y-hidden">
          <div className="flex justify-evenly lg:justify-center lg:gap-[200px]">
            <p>Days</p>
            <p className="pl-5">Hours</p>
            <p className="pl-2">Minutes</p>
          </div>

          <div className="flex justify-evenly lg:justify-center lg:gap-[150px] mt-5">
            <input
              type="number"
              value={days}
              onChange={handleDaysChange}
              placeholder="Days"
              className="w-[70px] lg:w-[100px] text-[15px] h-8 lg:text-[18px] px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />

            <input
              type="number"
              value={hrs}
              onChange={handleHoursChange}
              placeholder="Hrs"
              className="w-[70px] lg:w-[100px] text-[15px] h-8 lg:text-[18px] px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />

            <input
              type="number"
              value={minutes}
              onChange={handleMinutesChange}
              placeholder="Mins"
              className="w-[70px] lg:w-[100px] text-[15px] h-8 lg:text-[18px] px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-200 transition"
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={handleConvert}
            className="w-[140px] lg:w-[300px] lg:h-[50px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 lg:px-14 px-7 mr-3 rounded mt-5"
          >
            CONVERT
          </button>

          <button
            onClick={handleClear}
            className="w-[140px] lg:w-[300px] bg-black text-white font-bold py-2 lg:px-14 px-7 rounded mt-5"
          >
            CLEAR
          </button>
        </div>
        
        <p className="text-center mt-10 text-[20px]">
          Total Minutes: {totalMinutes}
        </p>
      </div>
    </div>
  );
};

export default App;