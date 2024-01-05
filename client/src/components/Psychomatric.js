import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Navbar from './Navbar';
import { FaRegNoteSticky } from "react-icons/fa6";

const Psychometric = () => {
  const [formData, setFormData] = useState({
    motivation: '',
    communication: '',
    problemSolving: '',
    adaptability: '',
    goalSetting: '',
    leadership: '',
    timeManagement: '',
    teamCollaboration: '',
    continuousLearning: '',
    selfReflection: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or send it to the server for analysis
    console.log(formData);
  };

  return (
    <div>
    <Navbar/>
    <div className='flex flex-col items-center justify-center bg-gradient-to-r from-gray-400 to-gray-800 py-12 font-semibold text-white text-4xl sm:py-20 md:py-32 lg:py-36'>
        <FaRegNoteSticky />
        <p className='mt-4'>PSYCHOMATRIC TEST</p>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md max-w-screen-md w-full "
      >
        <div className='md:flex md:flex-row md:space-x-4'>
        {/* Left Column */}
        <div className="mb-4 flex-1">
          {/* Motivation */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Motivation:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="motivation"
                  value={value}
                  checked={formData.motivation === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Communication Skills */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Communication Skills:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="communication"
                  value={value}
                  checked={formData.communication === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Problem-solving */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Problem Solving:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="problemSolving"
                  value={value}
                  checked={formData.problemSolving === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Adaptability */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Adaptability:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="adaptability"
                  value={value}
                  checked={formData.adaptability === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
          {/* Goal Setting */}
          <div className='mt-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Goal Setting:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="goalSetting"
                  value={value}
                  checked={formData.goalSetting === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="mb-4 flex-1">
          
          {/* Leadership */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Leadership:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="leadership"
                  value={value}
                  checked={formData.leadership === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Time Management */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Time Management:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="timeManagement"
                  value={value}
                  checked={formData.timeManagement === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Team Collaboration */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team Collaboration:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="teamCollaboration"
                  value={value}
                  checked={formData.teamCollaboration === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Continuous Learning */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Continuous Learning:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="continuousLearning"
                  value={value}
                  checked={formData.continuousLearning === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>

          {/* Self Reflection */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Self Reflection:
            </label>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="selfReflection"
                  value={value}
                  checked={formData.selfReflection === String(value)}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>
        </div>
        {/* Submit Button */}
        <div>
        <button
          type="submit"
          className="bg-navblue hover:scale-105 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
        </div>

      </form>
    </div>
    </div>
  );
};

export default Psychometric;
