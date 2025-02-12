import { NavLink, Radio } from "@mantine/core";
import React from "react";

const MapFilterRadio = ({ label, checked, onChange }) => {
  return (
    <NavLink
      label={
        <Radio
          labelPosition="left"
          label={<div className="text-base text-gray-400 w-48">{label}</div>}
          color="green"
          size="xs"
          variant="outline"
          checked={checked}
          onChange={() => {}}
          onClick={(_event) => {
            onChange(!checked);
          }}
          classNames={{
            body: "items-center",
          }}
        />
      }
    />
  );
};

export default MapFilterRadio;
