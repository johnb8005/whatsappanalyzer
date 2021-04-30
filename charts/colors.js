const colors = [
  "#1f618d",
  "#6c3483",
  "#3498db",
  "#DAF7A6",
  "#FFC300",
  "#FF5733"
];
const nColors = colors.length;
export const getColor = (idx) => colors[idx % nColors];
