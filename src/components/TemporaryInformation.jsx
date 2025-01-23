"use client";

import { INFORMATION } from "@/constants";

import { Switch, SwitchGroup, Group } from "@mantine/core";

export const TemporaryInformation = ({ information, setInformation }) => {
  return (
    <SwitchGroup value={information} onChange={setInformation}>
      <Group className="flex-col items-start">
        {INFORMATION.map((item) => (
          <Switch
            color="teal"
            key={item.key}
            value={item.key}
            label={item.title}
            styles={{
              track: { cursor: "pointer" },
              label: { cursor: "pointer" },
            }}
          />
        ))}
      </Group>
    </SwitchGroup>
  );
};
