'use client';

import React, { useState, useCallback } from 'react';
import MapFilterComponent from '../components/MapFilter/MapFilterComponent';
import { FILTER_DATA } from '../constants';

export const MapFilter = () => {
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
    <div className='w-fit bg-white rounded-lg max-h-[80vh] overflow-y-auto absolute top-10'>
      <MapFilterComponent
        filterData={FILTER_DATA}
        filterValues={filterValues}
        handleRadioChange={handleRadioChange}
        handleSwitchChange={handleSwitchChange}
      />
    </div>
  );
};
