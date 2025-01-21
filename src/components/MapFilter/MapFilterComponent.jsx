'use client';

import { NavLink, Image } from '@mantine/core';
import React from 'react';
import MapFilterRadio from './MapFilterRadio';
import MapFilterSwitch from './MapFilterSwitch';

const MapFilterComponent = ({ filterData, filterValues, handleRadioChange, handleSwitchChange }) => {
  return (
    <NavLink
      href="#required-for-focus"
      label={<span className="text-gray-900 text-xl font-medium">ชั้นข้อมูล</span>}
      leftSection={<Image alt="layer" className="size-5 mx-2" src="/layer.svg" />}
      defaultOpened={true}
      className="w-64"
    >
      {Object.entries(filterData).map(([key, { type, label, data }]) => (
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
  );
};

export default MapFilterComponent;
