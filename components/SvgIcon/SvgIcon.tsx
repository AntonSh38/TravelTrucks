'use client';

import { CSSProperties } from 'react';

type Props = {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

export default function SvgIcon({
  name,
  size,
  color = 'currentColor',
  className = '',
  style,
}: Props) {
  const svgSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      width={svgSize}
      height={svgSize}
      fill={color}
      stroke={color}
      color={color}
      className={`svg-icon ${className}`}
      style={{
        width: svgSize,
        height: svgSize,
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#${name}`} />
    </svg>
  );
}
