'use client'

import { NavLink, Image } from '@mantine/core';
import React from 'react';

const MapFilter = () => {
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
    <div className='w-fit bg-white'>
      <NavLink
        href="#required-for-focus"
        label={<span className="text-gray-900 text-xl font-medium">ชั้นข้อมูล</span>}
        leftSection={<Image alt="layer" className="size-5 mx-2" src="/layer.svg" />}
        defaultOpened={true}
        className="w-64"
      >
        {Object.keys(mockData).map((key) => (
          <NavLink
            key={key}
            label={<span className="text-gray-900">{key}</span>}
            opened={true}
            childrenOffset={0}
            disableRightSectionRotation={true}
            rightSection={<div />}
          >
            {mockData[key].map((value) => (
              <NavLink
                key={value}
                label={<span className="text-gray-400">{value}</span>}
              />
            ))}
          </NavLink>
        ))}
      </NavLink>
    </div>
  );
};

export default MapFilter;