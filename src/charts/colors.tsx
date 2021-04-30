const colors = [
  "#1f618d",
  "#6c3483",
  "#3498db",
  "#DAF7A6",
  "#FFC300",
  "#FF5733",
];
const nColors = colors.length;

// simple helper to make sure we never call a color that does not exist
export const getColor = (idx: number) => colors[idx % nColors];
