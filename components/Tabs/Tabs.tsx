'use client';

import React, { Children, isValidElement, ReactElement, useState } from 'react';
import css from './Tabs.module.css';

type TabPanelProps = {
  label: string;
  children: React.ReactNode;
};

type Props = {
  children: React.ReactNode;
  initial?: string;
};

export default function Tabs({ children, initial }: Props) {
  const childArray = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<TabPanelProps>[];

  const panels = childArray.map((child, i) => ({
    label: child.props.label,
    content: child.props.children,
    index: i,
  }));

  const labels = panels.map(p => p.label);
  const [active, setActive] = useState<string>(initial ?? labels[0] ?? '');

  return (
    <div className={css.tabs}>
      <div role="tablist" className={css.tabList}>
        {panels.map(panel => (
          <button
            key={panel.label}
            role="tab"
            aria-selected={panel.label === active}
            aria-controls={`panel-${panel.label}`}
            className={`${css.tab} ${panel.label === active ? css.active : ''}`}
            onClick={() => setActive(panel.label)}
          >
            {panel.label}
          </button>
        ))}
      </div>

      <div className={css.tabContent}>
        {panels
          .filter(panel => panel.label === active)
          .map(panel => (
            <div
              key={panel.label}
              role="tabpanel"
              id={`panel-${panel.label}`}
              className={css.tabPanel}
            >
              {panel.content}
            </div>
          ))}
      </div>
    </div>
  );
}
