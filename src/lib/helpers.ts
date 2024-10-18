export function seededRandom(seed: string) {
  let value = 0;
  for (let i = 0; i < seed.length; i++) {
    value += seed.charCodeAt(i) * (i + 1);
  }
  return function () {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export const generatePattern = (seed: string) => {
  const random = seededRandom(seed);
  const pattern = [];

  for (let y = 0; y < 8; y++) {
    const row = [];
    for (let x = 0; x < 4; x++) {
      row[x] = Math.floor(random() * 3);
    }
    for (let x = 4; x < 8; x++) {
      row[x] = row[7 - x];
    }
    pattern.push(row);
  }

  return pattern;
};

export const generateColors = (seed: string) => {
  const random = seededRandom(seed);
  const colors = [];
  for (let i = 0; i < 3; i++) {
    const color = `hsl(${Math.floor(random() * 360)}, 100%, 70%)`;
    colors.push(color);
  }
  return colors;
};
