type MotifProps = {
  color: string;
};

// A forecast curve with a confidence band — for the retail forecasting project.
export function ForecastMotif({ color }: MotifProps) {
  return (
    <svg
      viewBox="0 0 320 90"
      className="w-full h-20"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M0 66 C 30 58, 45 40, 70 46 S 120 70, 150 52 S 200 18, 230 28 S 280 54, 320 34"
        fill="none"
        stroke={color}
        strokeOpacity="0.18"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M0 60 C 30 52, 45 34, 70 40 S 120 62, 150 46 S 200 14, 230 24 S 280 46, 320 28"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="320" cy="28" r="3" fill={color} />
    </svg>
  );
}

// A power/telemetry waveform — for the IoT energy monitoring project.
export function TelemetryMotif({ color }: MotifProps) {
  return (
    <svg
      viewBox="0 0 320 90"
      className="w-full h-20"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M0 45 Q 8 15 16 45 T 32 45 T 48 45 T 64 45 T 80 45 T 96 45 T 112 45 T 128 45 T 144 45 T 160 45 T 176 45 T 192 45 T 208 45 T 224 45 T 240 45 T 256 45 T 272 45 T 288 45 T 304 45 T 320 45"
        fill="none"
        stroke={color}
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <path
        d="M0 45 Q 12 68 24 45 T 48 45 T 72 45 T 96 45 T 120 45 T 144 45 T 168 45 T 192 45 T 216 45 T 240 45 T 264 45 T 288 45 T 312 45"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

// Clustered points with match lines — for the property × buyer persona project.
export function SpatialMotif({ color }: MotifProps) {
  const points = [
    [24, 60], [40, 44], [58, 58], [70, 30], [96, 40],
    [150, 62], [168, 50], [186, 66], [206, 42],
    [252, 34], [270, 50], [292, 28], [304, 46],
  ];
  const links: [number, number][] = [[1, 0], [1, 2], [1, 4], [6, 5], [6, 7], [6, 8], [10, 9], [10, 11], [10, 12]];
  return (
    <svg
      viewBox="0 0 320 90"
      className="w-full h-20"
      role="presentation"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke={color}
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 1 || i === 6 || i === 10 ? 4 : 2.5}
          fill={color}
          fillOpacity={i === 1 || i === 6 || i === 10 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}
