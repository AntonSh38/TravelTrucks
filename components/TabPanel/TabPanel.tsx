'use client';

import React from 'react';

type Props = {
  label: string;
  children: React.ReactNode;
};

export default function TabPanel({ children }: Props) {
  return <>{children}</>;
}
