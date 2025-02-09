import { Boat, Home, Human, Seeds, Shelter } from "@/icons";
import TH_DATA from "./thailand_amphoe.json";

export const FILTER_DATA = {
  flood: {
    watchOut: [
      {
        type: "radio",
        label: "คาดการณ์การเกิดภัย",
        data: [
          {
            label: "คาดการณ์ 1 วัน",
            order: 3,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/0",
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/5",
            ],
          },
          {
            label: "คาดการณ์ 2 วัน",
            order: 3,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/0",
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/5",
            ],
          },
          {
            label: "คาดการณ์ 3 วัน",
            order: 3,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/0",
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/5",
            ],
          },
        ],
      },
      {
        type: "switch",
        label: "ข้อมูลเขื่อน",
        data: null,
        order: 1,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/2",
        ],
      },
      {
        type: "switch",
        label: "ข้อมูลน้ำท่า",
        data: null,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/1",
        ],
      },
      {
        type: "switch",
        label: "ปริมาณฝน",
        data: null,
        order: 2,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/4",
        ],
      },
      {
        type: "switch",
        label: "ศูนย์พักพิง",
        data: null,
        order: 1,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/Shelter_91123/FeatureServer/1",
        ],
      },
    ],
    handle: [
      {
        type: "switch",
        label: "พื้นที่เกิดภัย",
        data: null,
        order: 3,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/3",
        ],
      },
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: [
          {
            label: "คาดการณ์พายุ",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/0",
            ],
          },
          {
            label: "ข้อมูลเขื่อน",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/2",
            ],
          },
          {
            label: "ข้อมูลน้ำท่า",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/1",
            ],
          },
          {
            label: "ปริมาณฝน",
            order: 2,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/4",
            ],
          },
        ],
      },
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: [
          {
            label: "ศูนย์พักพิง",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/Shelter_91123/FeatureServer",
            ],
          },
          {
            label: "ทรัพยากรช่วยเหลือ",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/abt_machine_1/FeatureServer/0",
            ],
          },
        ],
      },
    ],
    restore: [
      {
        type: "switch",
        label: "พื้นที่เกิดภัย",
        data: null,
        order: 2,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/3",
        ],
      },
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: [
          {
            label: "พื้นที่การเกษตร",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/LU_SPB_2564/FeatureServer/0",
            ],
          },
        ],
      },
      {
        type: "switch",
        label: "ทรัพยากรช่วยเหลือ",
        data: null,
        order: 1,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/abt_machine_1/FeatureServer/0",
        ],
      },
    ],
  },
  "PM2.5": {
    watchOut: [
      {
        type: "radio",
        label: "คาดการณ์การเกิดภัย",
        data: [
          {
            label: "คาดการณ์ 1 วัน",
            order: 3,
            layer: [],
          },
          {
            label: "คาดการณ์ 2 วัน",
            order: 3,
            layer: [],
          },
          {
            label: "คาดการณ์ 3 วัน",
            order: 3,
            layer: [],
          },
        ],
      },
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: [
          {
            label: "hotspot",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/suphanburi_pm25_hotspots/FeatureServer/1",
            ],
          },
          {
            label: "น้ำฝน",
            order: 2,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/4",
            ],
          },
        ],
      },
    ],
    handle: [
      {
        type: "switch",
        label: "ข้อมูล pm2.5",
        data: null,
        order: 3,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/suphanburi_pm25_hotspots/FeatureServer/0",
        ],
      },
      {
        type: "switch",
        label: "ข้อมูลทรัพยากร",
        data: null,
        order: 1,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/abt_machine_1/FeatureServer/0",
        ],
      },
      {
        type: "switch",
        label: "ปัจจัยการเกิดภัย",
        data: [
          {
            label: "hotspot",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/suphanburi_pm25_hotspots/FeatureServer/1",
            ],
          },
          {
            label: "น้ำฝน",
            order: 2,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/DevMap_SPR/FeatureServer/4",
            ],
          },
        ],
      },
    ],
    restore: [
      {
        type: "switch",
        label: "พื้นที่เกิดภัย",
        data: null,
        order: 3,
        layer: [],
      },
      {
        type: "switch",
        label: "สถานที่สำคัญ",
        data: [
          {
            label: "พื้นที่การเกษตร",
            order: 1,
            layer: [
              "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/LU_SPB_2564/FeatureServer/0",
            ],
          },
        ],
      },
      {
        type: "switch",
        label: "ทรัพยากรช่วยเหลือ",
        data: null,
        order: 1,
        layer: [
          "https://gis-portal.disaster.go.th/arcgis/rest/services/Hosted/abt_machine_1/FeatureServer/0",
        ],
      },
    ],
  },
};

export const MAP_LAYER = {
  flood: {
    watchOut: [
      {
        order: 3,
        layer: FILTER_DATA.flood.watchOut[0].data[0].layer,
      },
      {
        order: 3,
        layer: FILTER_DATA.flood.watchOut[0].data[1].layer,
      },
      {
        order: 3,
        layer: FILTER_DATA.flood.watchOut[0].data[2].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.watchOut[1].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.watchOut[2].layer,
      },
      {
        order: 2,
        layer: FILTER_DATA.flood.watchOut[3].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.watchOut[4].layer,
      },
    ],
    handle: [
      {
        order: 3,
        layer: FILTER_DATA.flood.handle[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.handle[1].data[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.handle[1].data[1].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.handle[1].data[2].layer,
      },
      {
        order: 2,
        layer: FILTER_DATA.flood.handle[1].data[3].layer,
      },
      {
        label: "ศูนย์พักพิง",
        order: 1,
        layer: FILTER_DATA.flood.handle[2].data[0].layer,
      },
      {
        label: "ทรัพยากรช่วยเหลือ",
        layer: FILTER_DATA.flood.handle[2].data[1].layer,
      },
    ],
    restore: [
      {
        order: 2,
        layer: FILTER_DATA.flood.restore[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.restore[1].data[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA.flood.restore[2].layer,
      },
    ],
  },
  "PM2.5": {
    watchOut: [
      {
        order: 3,
        layer: [],
      },
      {
        order: 3,
        layer: [],
      },
      {
        order: 3,
        layer: [],
      },
      {
        order: 1,
        layer: FILTER_DATA["PM2.5"].watchOut[1].data[0].layer,
      },
      {
        order: 2,
        layer: FILTER_DATA["PM2.5"].watchOut[1].data[1].layer,
      },
    ],
    handle: [
      {
        order: 3,
        layer: FILTER_DATA["PM2.5"].handle[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA["PM2.5"].handle[1].layer,
      },
      {
        order: 1,

        layer: FILTER_DATA["PM2.5"].handle[2].data[0].layer,
      },
      {
        order: 2,
        layer: FILTER_DATA["PM2.5"].handle[2].data[1].layer,
      },
    ],
    restore: [
      {
        order: 3,
        layer: [],
      },
      {
        order: 1,
        layer: FILTER_DATA["PM2.5"].restore[1].data[0].layer,
      },
      {
        order: 1,
        layer: FILTER_DATA["PM2.5"].restore[2].layer,
      },
    ],
  },
};

export const DEFAULT_FILTER_DATA = {
  flood: {
    watchOut: {
      คาดการณ์การเกิดภัย: {
        "คาดการณ์ 3 วัน": FILTER_DATA.flood.watchOut[0].data[2].layer,
      },
    },
    handle: {
      พื้นที่เกิดภัย: { พื้นที่เกิดภัย: FILTER_DATA.flood.handle[0].layer },
    },
    restore: {
      พื้นที่เกิดภัย: { พื้นที่เกิดภัย: FILTER_DATA.flood.handle[0].layer },
    },
  },
  "PM2.5": {
    watchOut: {
      ปัจจัยการเกิดภัย: {
        hotspot: FILTER_DATA["PM2.5"].watchOut[1].data[0].layer,
      },
    },
    handle: {
      "ข้อมูล pm2.5": { "ข้อมูล pm2.5": FILTER_DATA["PM2.5"].handle[0].layer },
    },
  },
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

export const TH = TH_DATA;

export const MAP_OPTIONS = Object.entries(TH_DATA).map(([key, value]) => {
  const { lat, long, ...subLocations } = value;

  return {
    label: key,
    value: key,
    location: [long, lat],
    option: Object.entries(subLocations).map(([subKey, subValue]) => ({
      label: subKey,
      value: subKey,
      location: [subValue.long, subValue.lat],
    })),
  };
});

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
