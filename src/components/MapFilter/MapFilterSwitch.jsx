import { NavLink, Switch } from '@mantine/core';
import React from 'react';

const MapFilterSwitch = ({ label, checked, onChange, labelClassName }) => {
  return (
    <NavLink
      label={
        <Switch
          labelPosition="left"
          label={<div className={`text-base text-gray-400 w-44 ${labelClassName}`}>{label}</div>}
          color="green"
          size="xs"
          checked={checked}
          onChange={(event) => onChange(event.currentTarget.checked)}
          classNames={{
            body: 'items-center cursor-pointer'
          }}
        />
      }
    />
  );
};

export default MapFilterSwitch;
