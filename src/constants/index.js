export const FILTER_DATA = {
  disasterArea: {
    type: "radio",
    label: "พื้นที่เกิดภัย",
    data: [
      "วันนี้",
      "คาดการณ์ 1 วัน",
      "คาดการณ์ 2 วัน",
      "คาดการณ์ 3 วัน",
      "คาดการณ์ 5 วัน",
      "พื้นที่ที่ได้รับความเสียหาย",
    ],
  },
  disasterFactors: {
    type: "switch",
    label: "ปัจจัยการเกิดภัย",
    data: ["ปริมาณน้ำฝน", "ปริมาณน้ำเขื่อน", "ปริมาณน้ำท่า", "ความชื้นดิน"],
  },
  populationData: {
    type: "switch",
    label: "ข้อมูลประชากร",
    data: ["ประชาชน", "ครัวเรือน"],
  },
  importentPlace: {
    type: "switch",
    label: "สถานที่สําคัญ",
    data: [
      "ศูนย์พักพิง",
      "พื้นที่การเกษตร",
      "สำนักงานเขต ปภ.",
      "ปภ. จังหวัด",
      "เสาวิทยุสื่อสาร",
      "หน่วยงานราชการ",
      "โรงเรียน",
      "โรงพยาบาล",
      "สถานบริการน้ำมัน",
    ],
  },
  resources: {
    type: "switch",
    label: "ทรัพยากร",
    data: [
      "รถปฏิบัติการ",
      "รถบรรทุก",
      "เรือปฏิบัติการ",
      "เครื่องสูบน้ำ",
      "การช่วยเหลือทางการเกษตร",
      "เครื่องมือปฏิบัติการอื่นๆ",
    ],
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
  { label: "ดินโคลนถล่ม", value: "mudslide" },
  { label: "วาตภัย", value: "storm" },
  { label: "ภัยแล้ง", value: "drought" },
  { label: "อัคคีภัย", value: "fire" },
];

export const DISTRICT_OPTIONS = [
  {
    label: "แม่สาย",
    value: "maeSai",
  },
  {
    label: "เมือง",
    value: "muang",
  },
  {
    label: "เวียงชัย",
    value: "wiangChai",
  },
  {
    label: "แม่ลาว",
    value: "maeLao",
  },
  {
    label: "แม่จัน",
    value: "maeChun",
  },
];

export const SUBDISTRICT_OPTIONS = [
  {
    label: "แม่สาย",
    value: "maeSai",
  },
  { label: "ห้วยไคร้", value: "huaiKhrai" },
  { label: "เกาะช้าง", value: "koChang" },
  { label: "ศรีเมืองชุม", value: "sriMueangChum" },
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
