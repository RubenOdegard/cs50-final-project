interface PlanetscaleIconProps {
  height?: number | string;
  width?: number | string;
  color?: string;
}

export default function PlanetscaleIcon(
  { height = 256, width = 256, color = "#000000" }: PlanetscaleIconProps,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      style={{ color: `${color}`, width: `${width}px`, height: `${height}px` }}
    >
      <title className="sr-only">Planetscale Icon</title>
      <path d="M256 128.044c-.024 70.657-57.299 127.932-127.956 127.956ZM128 0c51.977 0 96.719 30.98 116.765 75.483L75.483 244.765a127.791 127.791 0 0 1-20.636-11.715L159.897 128H128l-90.51 90.51C14.327 195.345 0 163.345 0 128C0 57.308 57.308 0 128 0Z" />
    </svg>
  );
}
