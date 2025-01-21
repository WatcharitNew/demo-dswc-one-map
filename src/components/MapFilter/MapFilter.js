'use client';

import { NavLink, Image } from '@mantine/core';
import React, { useState, useCallback } from 'react';
import MapFilterRadio from './MapFilterRadio';
import MapFilterSwitch from './MapFilterSwitch';
import { FILTER_DATA } from '@/constants';

const MapFilter = () => {
  const [filterValues, setFilterValues] = useState({
    disasterArea: 'วันนี้',
    disasterFactors: {},
    populationData: {}
  });

  const updateMapLayers = useCallback(async (newFilters) => {
    // TODO: call BE API
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
    <div className='w-fit bg-white rounded-lg max-h-[80vh] overflow-y-auto'>
      <NavLink
        href="#required-for-focus"
        label={<span className="text-gray-900 text-xl font-medium">ชั้นข้อมูล</span>}
        leftSection={<Image alt="layer" className="size-5 mx-2" src="/layer.svg" />}
        defaultOpened={true}
        className="w-64"
      >
        {Object.entries(FILTER_DATA).map(([key, { type, label, data }]) => (
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
