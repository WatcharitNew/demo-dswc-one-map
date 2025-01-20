"use client";

import { useMemo } from "react";

import { FLOOD_LEVEL, INFORMATION, MUDSLIDE } from "@/constants";

import { ColorSwatch, Flex, Text } from "@mantine/core";

export const MapLabel = ({selectedDisaster}) => {
  const isSelectedFlood = useMemo(() => {
    return selectedDisaster.includes('flood')
  }, [selectedDisaster])

  const isSelectedMudslide = useMemo(() => {
    return selectedDisaster.includes('mudslide')
  }, [selectedDisaster])

  return (
    <Flex className="flex-col items-end gap-3 py-2 px-6 bg-white rounded-md">
      {isSelectedFlood && <Flex className="gap-5 items-center">
        <Text>อุทกภัย:</Text>

        {FLOOD_LEVEL.map((level) => (
          <Flex key={level.title} className="items-center gap-2">
            <ColorSwatch color={level.color} radius="sm" size={16} />
            <Text>{level.title}</Text>
          </Flex>
        ))}
      </Flex>}

      {isSelectedMudslide && <Flex className="gap-5 items-center">
        <Text>ดินโคลนถล่ม:</Text>

        {MUDSLIDE.map((level) => (
          <Flex key={level.title} className="items-center gap-2">
            <ColorSwatch color={level.color} radius="sm" size={16} />
            <Text>{level.title}</Text>
          </Flex>
        ))}
      </Flex>}

      <Flex className="gap-5 items-center">
        {INFORMATION.map((information) => (
          <Flex key={information.key} className="items-center gap-2">
            <information.icon className="size-6 text-blue-400"/>
            <Text>{information.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
