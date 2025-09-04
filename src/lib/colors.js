export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const predefinedColors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#33FFF5",
  "#29DFCC",
  "#FF8C33",
  "#8C33FF",
  "#33FF8C",
  "#FF3333",
  "#33FF33",
  "#3333FF",
];

export const getColorForName = (name) => {
  const index =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % predefinedColors.length;
  return predefinedColors[index];
};
