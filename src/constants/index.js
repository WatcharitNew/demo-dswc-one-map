import { Boat, Home, Human, Seeds, Shelter } from "@/icons";

export const FILTER_DATA = {
  flood: {
    watchOut: [
      {
        type: "radio",
        label: "คาดการณ์การเกิดภัย",
        data: ["คาดการณ์ 1 วัน", "คาดการณ์ 2 วัน", "คาดการณ์ 3 วัน"],
      },
      {
        type: "switch",
        label: "ข้อมูลเขื่อน",
        data: null,
      },
      {
        type: "switch",
        label: "ข้อมูลน้ำท่า",
        data: null,
      },
      {
        type: "switch",
        label: "ปริมาณฝน",
        data: null,
      },
      {
        type: "switch",
        label: "ศูนย์พักพิง",
        data: null,
      },
    ],
    handle: [
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: ["คาดการณ์พายุ", "ข้อมูลเขื่อน", "ข้อมูลน้ำท่า", "ปริมาณฝน"],
      },
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: ["ศูนย์พักพิง"],
      },
    ],
    restore: [
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: ["พื้นที่การเกษตร"],
      },
      {
        type: "switch",
        label: "ทรัพยากรช่วยเหลือ",
        data: null,
      },
    ],
  },
  "PM2.5": {
    watchOut: [
      {
        type: "radio",
        label: "คาดการณ์การเกิดภัย",
        data: ["คาดการณ์ 1 วัน", "คาดการณ์ 2 วัน", "คาดการณ์ 3 วัน"],
      },
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: ["hotspot", "น้ำฝน"],
      },
    ],
    handle: [
      {
        type: "switch",
        label: "ข้อมูล pm2.5",
        data: null,
      },
      {
        type: "switch",
        label: "ข้อมูลทรัพยากร",
        data: null,
      },
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: ["hotspot", "น้ำฝน"],
      },
    ],
    restore: [
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: ["พื้นที่การเกษตร"],
      },
      {
        type: "switch",
        label: "ทรัพยากรช่วยเหลือ",
        data: null,
      },
    ],
  },
};

export const mapLayer = {
  0: ["น้ำฝน", "ปริมาณฝน", "ข้อมูล pm2.5"],
  2: ["คาดการณ์ 3 วัน", "ข้อมูลทรัพยากร"],
  3: ["คาดการณ์ 1 วัน", "ทรัพยากรช่วยเหลือ", "ข้อมูลเขื่อน"],
  4: ["hotspot", "ศูนย์พักพิง", "คาดการณ์พายุ"],
  5: ["คาดการณ์ 2 วัน", "ข้อมูลน้ำท่า", "พื้นที่การเกษตร"],
};
export const DISASTERS = [
  {
    srcName: "disaster-flood",
    text: "อุทกภัย",
    value: "flood",
  },
  {
    srcName: "disaster-drought",
    text: "ภัยแล้ง",
    value: "drought",
  },
  {
    srcName: "disaster-storm",
    text: "วาตภัย/พายุ",
    value: "storm",
  },
  {
    srcName: "disaster-mudslide",
    text: "ดินโคลนถล่ม",
    value: "mudslide",
  },
  {
    srcName: "disaster-earthquake-tsunami",
    text: "แผ่นดินไหว",
    subtext: "สึนามิ",
    value: "earthquake-tsunami",
  },
  {
    srcName: "disaster-pm25",
    text: "หมอกควัน",
    subtext: "PM2.5",
    value: "pm25",
  },
  {
    srcName: "disaster-forest-fire",
    text: "ไฟป่า",
    value: "forest-fire",
  },
];

export const DISASTER_TYPE = [
  { label: "อุทกภัย", value: "flood" },
  { label: "PM2.5", value: "PM2.5" },
  { label: "ดินโคลนถล่ม", value: "mudslide" },
  { label: "วาตภัย", value: "storm" },
  { label: "ภัยแล้ง", value: "drought" },
  { label: "อัคคีภัย", value: "fire" },
  { label: "แผ่นดินไหว/สึนามิ", value: "earthquake" },
];

export const DISASTER_TYPE_ENABLE = ["flood", "PM2.5"];

export const PROVINCE_OPTIONS = [
  {
    label: "สุพรรณบุรี",
    value: "สุพรรณบุรี",
    location: [100.1326371, 14.5477289],
  },
];

export const AMPHOE_OPTIONS = [
  {
    label: "สุพรรณบุรี",
    value: "สุพรรณบุรี",
    location: [100.11, 14.484444],
  },
  {
    label: "ด่านช้าง",
    value: "ด่านช้าง",
    location: [99.697222, 14.841667],
  },
];

export const LEVEL = [
  {
    label: "รับมือ",
    value: "handle",
    defaultColor: "bg-red-100",
    activeColor: "bg-[#F65164]",
  },
  {
    label: "ฟื้นฟู",
    value: "restore",
    defaultColor: "bg-green-100",
    activeColor: "bg-green-500",
  },
  {
    label: "เฝ้าระวัง",
    value: "watchOut",
    defaultColor: "bg-yellow-100",
    activeColor: "bg-yellow-500",
  },
];

export const FLOOD_LEVEL = [
  {
    color: "#426CDB",
    title: "เสี่ยงสูงมาก",
  },
  {
    color: "#7795E8",
    title: "เสี่ยงสูง",
  },
  {
    color: "#A5B8EF",
    title: "เสี่ยงปานกลาง",
  },
  {
    color: "#D2DCF7",
    title: "เสี่ยงต่ำ",
  },
  {
    color: "#FFFFFF",
    title: "ปกติ",
  },
];

export const MUDSLIDE = [
  {
    color: "#8D6541",
    title: "เสี่ยงสูงมาก",
  },
  {
    color: "#AA8C71",
    title: "เสี่ยงสูง",
  },
  {
    color: "#C6B2A0",
    title: "เสี่ยงปานกลาง",
  },
  {
    color: "#E3D9D0",
    title: "เสี่ยงต่ำ",
  },
  {
    color: "#FFFFFF",
    title: "ปกติ",
  },
];

export const INFORMATION = [
  {
    icon: Boat,
    key: "boat",
    title: "เรือ",
  },
  {
    icon: Home,
    key: "home",
    title: "ครัวเรือน",
  },
  {
    icon: Human,
    key: "human",
    title: "ประชาชน",
  },
  {
    icon: Seeds,
    key: "seeds",
    title: "เมล็ดพันธุ์ช่วยเหลือ",
  },
  {
    icon: Shelter,
    key: "shelter",
    title: "ศูนย์พักพิง",
  },
];

export const DOMAIN =
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/";

export const defaultLayer = {
  สุพรรณบุรี: [1],
};

export const LAYER_RUL = [
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/0",
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/1",
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/2",
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/3",
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/4",
  "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/5",
];
