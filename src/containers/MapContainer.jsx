'use client'

import { useState } from "react"
import { Stack } from "@mantine/core"

import { TemporaryDisaster } from "@/components/TemporaryDisaster"
import { TemporaryInformation } from "@/components/TemporaryInformation"
import { MapLabel } from "@/components"

export const MapContainer = () => {
  const [disaster, setDisaster] = useState([]);
  const [information, setInformation] = useState([]);

  return (
    <Stack className="px-6">
      <TemporaryDisaster disaster={disaster} setDisaster={setDisaster}/>
      <TemporaryInformation information={information} setInformation={setInformation}/>
      <MapLabel selectedDisaster={disaster} selectedInformation={information}/>
    </Stack>
  )
}
