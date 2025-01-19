'use client'

import React, { useState } from 'react';

const MapFilter = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const mockData = {
    "พื้นที่เกิดภัย": [
      "วันนี้",
      "คาดการณ์ 1 วัน",
      "คาดการณ์ 2 วัน",
      "คาดการณ์ 3 วัน",
      "คาดการณ์ 5 วัน",
      "พื้นที่ที่ได้รับความเสียหาย"
    ],
    "ปัจจัยการเกิดภัย": [
      "ปริมาณน้ำฝน",
      "ปริมาณน้ำเขื่อน",
      "ปริมาณน้ำท่า",
      "ความชื้นดิน"
    ],
    "ข้อมูลประชากร": [
      "ประชาชน",
      "ครัวเรือน"
    ]
  }

  return (
    <div className="w-full max-w-md p-4 bg-white">
      <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={toggleExpand}>
        <h2 className="text-lg font-medium">ชั้นข้อมูล</h2>
        <button className="text-gray-500 transition-transform duration-200"
          style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-180deg)' }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`space-y-4 transition-all duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        {Object.keys(mockData).map((key) => (
          <div key={key}>
            <h3 className="text-base font-medium mb-2">{key}</h3>
            <div className="space-y-2">
              {mockData[key].map((value) => (
                <label className="flex items-center space-x-2" key={value}>
                  <input type="radio" name="forecast" className="w-4 h-4 text-green-600" />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapFilter;