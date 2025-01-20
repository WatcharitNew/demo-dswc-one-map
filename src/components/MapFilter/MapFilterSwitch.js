import { NavLink, Switch } from '@mantine/core';
import React from 'react';

const MapFilterSwitch = ({ label }) => {
  return (
    <NavLink
      label={
        <Switch
          labelPosition="left"
          label={<div className='text-base text-gray-400 w-44'>{label}</div>}
          color="green"
          size="xs"
          variant="outline"
          classNames={{
            body: 'items-center'
          }}
        />
      }
    />
  );
};

export default MapFilterSwitch;