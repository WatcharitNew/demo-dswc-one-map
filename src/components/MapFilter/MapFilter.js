'use client';

import { NavLink, Image } from '@mantine/core';
import React, { useState, useCallback } from 'react';
import MapFilterRadio from './MapFilterRadio';
import MapFilterSwitch from './MapFilterSwitch';

const MapFilter = () => {
  const [filterValues, setFilterValues] = useState({
    disasterArea: 'วันนี้',
    disasterFactors: {},
    populationData: {}
  });

  const mockData = {
    disasterArea: {
      type: 'radio',
      label: 'พื้นที่เกิดภัย',
      data: [
        "วันนี้",
        "คาดการณ์ 1 วัน",
        "คาดการณ์ 2 วัน",
        "คาดการณ์ 3 วัน",
        "คาดการณ์ 5 วัน",
        "พื้นที่ที่ได้รับความเสียหาย"
      ]
    },
    "disasterFactors": {
      type: 'switch',
      label: 'ปัจจัยการเกิดภัย',
      data: [
        "ปริมาณน้ำฝน",
        "ปริมาณน้ำเขื่อน",
        "ปริมาณน้ำท่า",
        "ความชื้นดิน"
      ]
    },
    "populationData": {
      type: 'switch',
      label: 'ข้อมูลประชากร',
      data: [
        "ประชาชน",
        "ครัวเรือน"
      ]
    }
  };

  const updateMapLayers = useCallback(async (newFilters) => {
    console.log(newFilters)
  }, []);

  const handleRadioChange = useCallback((value) => {
    const newFilters = {
      ...filterValues,
      disasterArea: value
    };
    setFilterValues(newFilters);
    updateMapLayers(newFilters);
  }, [filterValues, updateMapLayers]);

  const handleSwitchChange = useCallback((section, value, checked) => {
    const newFilters = {
      ...filterValues,
      [section]: {
        ...filterValues[section],
        [value]: checked
      }
    };
    setFilterValues(newFilters);
    updateMapLayers(newFilters);
  }, [filterValues, updateMapLayers]);

  return (
    <div className='w-fit bg-white rounded-lg'>
      <NavLink
        href="#required-for-focus"
        label={<span className="text-gray-900 text-xl font-medium">ชั้นข้อมูล</span>}
        leftSection={<Image alt="layer" className="size-5 mx-2" src="/layer.svg" />}
        defaultOpened={true}
        className="w-64"
      >
        {Object.entries(mockData).map(([key, { type, label, data }]) => (
          <NavLink
            key={key}
            label={<span className="text-gray-900 text-base">{label}</span>}
            opened={true}
            childrenOffset={0}
            disableRightSectionRotation={true}
            rightSection={<div />}
          >
            {data.map((value, index) => (
              type === 'radio' ? (
                <MapFilterRadio
                  key={value}
                  label={value}
                  checked={filterValues.disasterArea === value}
                  onChange={() => handleRadioChange(value)}
                  defaultOpened={index == 0}
                />
              ) : (
                <MapFilterSwitch
                  key={value}
                  label={value}
                  checked={filterValues[key]?.[value] || false}
                  onChange={(checked) => handleSwitchChange(key, value, checked)}
                />
              )
            ))}
          </NavLink>
        ))}
      </NavLink>
    </div>
  );
};

export default MapFilter;
