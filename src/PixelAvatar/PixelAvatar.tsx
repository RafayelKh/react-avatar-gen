import { generateColors, generatePattern } from './../lib/helpers';

export const PixelAvatar = ({ seed }: { seed: string }) => {
  const colors = generateColors(seed);
  const pattern = generatePattern(seed);

  return (
    <svg width="40" height="40" viewBox="0 0 80 80" style={{ boxShadow: 'none', borderRadius: "9999px" }}>
      <defs>
        <clipPath id="circleMask">
          <circle cx="40" cy="40" r="40" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleMask)">
        {pattern.map((row, y) =>
          row.map((colorIndex, x) => (
            <rect
              key={`${x}-${y}`}
              x={x * 10}
              y={y * 10}
              width="10"
              height="10"
              fill={colors[colorIndex]}
            />
          ))
        )}
      </g>
    </svg>
  );
};

export default PixelAvatar