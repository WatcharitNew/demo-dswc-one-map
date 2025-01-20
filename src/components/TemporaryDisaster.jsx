"use client";

import { Flex, Chip, ChipGroup } from "@mantine/core";

export const TemporaryDisaster = ({ disaster, setDisaster }) => {
  return (
    <Flex className="gap-4">
      <ChipGroup multiple value={disaster} onChange={setDisaster}>
        <Chip value="flood">อุทกภัย</Chip>
        <Chip value="mudslide">ดินโคลนถล่ม</Chip>
      </ChipGroup>
    </Flex>
  );
};
