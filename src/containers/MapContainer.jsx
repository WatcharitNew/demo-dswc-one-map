'use client'

import { useState } from "react"
import { Stack } from "@mantine/core"

import { TemporaryDisaster } from "@/components/TemporaryDisaster"
import { MapLabel } from "@/components"

export const MapContainer = () => {
  const [disaster, setDisaster] = useState([]);

  return (
    <Stack className="px-6">
      <TemporaryDisaster disaster={disaster} setDisaster={setDisaster}/>
      <MapLabel selectedDisaster={disaster}/>
    </Stack>
  )
}
