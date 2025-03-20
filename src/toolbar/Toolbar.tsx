import React from 'react';
import { Panel } from '@xyflow/react';
import styles from './Toolbar.module.css';

import  RouterIcon from "../assets/router.svg?react";
import ServerIcon from "../assets/server.svg?react";
import PCIcon from "../assets/pc.svg?react";

export default function Toolbar() {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Panel title="Toolbar" position="top-center" className={styles.panel}>
      <div draggable onDragStart={(event) => onDragStart(event, 'pc')}>
        <PCIcon className={styles.icon} />
      </div>

      <div draggable onDragStart={(event) => onDragStart(event, 'router')}>
        <RouterIcon className={styles.routerIcon} />
      </div>

      <div draggable onDragStart={(event) => onDragStart(event, 'server')}>
        <ServerIcon className={styles.icon} />
      </div>
    </Panel>
  );
}
