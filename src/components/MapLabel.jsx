"use client";

import { FLOOD_LEVEL, MUDSLIDE } from "@/constants";

import { ColorSwatch, Flex, Text } from "@mantine/core";

export const MapLabel = () => {
  return (
    <Flex className="flex-col items-end gap-3 py-2 px-6 mt-10 bg-white rounded-md">
      <Flex className="gap-5 items-center">
        <Text>อุทกภัย:</Text>

        {FLOOD_LEVEL.map((level) => (
          <Flex key={level.title} className="items-center gap-2">
            <ColorSwatch color={level.color} radius="sm" size={16} />
            <Text>{level.title}</Text>
          </Flex>
        ))}
      </Flex>

      <Flex className="gap-5 items-center">
        <Text>ดินโคลนถล่ม:</Text>

        {MUDSLIDE.map((level) => (
          <Flex key={level.title} className="items-center gap-2">
            <ColorSwatch color={level.color} radius="sm" size={16} />
            <Text>{level.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
