import { NavLink, Image, Radio } from '@mantine/core';
import React from 'react';
import MapFilterRadio from './MapFilterRadio';
import MapFilterSwitch from './MapFilterSwitch';

const MapFilter = () => {
  const mockData = {
    "พื้นที่เกิดภัย": {
      type: 'radio',
      data: [
        "วันนี้",
        "คาดการณ์ 1 วัน",
        "คาดการณ์ 2 วัน",
        "คาดการณ์ 3 วัน",
        "คาดการณ์ 5 วัน",
        "พื้นที่ที่ได้รับความเสียหาย"
      ]
    },
    "ปัจจัยการเกิดภัย": {
      type: 'checkbox',
      data: [
      "ปริมาณน้ำฝน",
      "ปริมาณน้ำเขื่อน",
      "ปริมาณน้ำท่า",
      "ความชื้นดิน"
      ]
    },
    "ข้อมูลประชากร": {
      type: 'checkbox',
      data: [
      "ประชาชน",
      "ครัวเรือน"
      ]
    }
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
            label={<span className="text-gray-900 text-base">{key}</span>}
            opened={true}
            childrenOffset={0}
            disableRightSectionRotation={true}
            rightSection={<div />}
          >
            {mockData[key].data.map((value) => (
              mockData[key].type === 'radio' ?
                <MapFilterRadio key={value} label={value} /> :
                <MapFilterSwitch key={value} label={value} />
            ))}
          </NavLink>
        ))}
      </NavLink>
    </div>
  );
};

export default MapFilter;