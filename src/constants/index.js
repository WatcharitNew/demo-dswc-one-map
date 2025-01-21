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
