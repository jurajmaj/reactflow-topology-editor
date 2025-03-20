import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type AppNode } from './types';
import styles from './TopologyNode.module.css';

import  RouterIcon from "../assets/router.svg?react";
import ServerIcon from "../assets/server.svg?react";
import PCIcon from "../assets/pc.svg?react";

export function TopologyNode({ data }: NodeProps<AppNode>) {
  const renderIcon = () => {
    switch (data.nodeType) {
      case "router":
        return <RouterIcon />;
      case "server":
        return <ServerIcon />;
      case "pc":
        return <PCIcon width="50" height="50" />;
      default:
        return null;
    }
  };

  return (
    <div className="custom-node">
      {renderIcon()}
      <Handle type="source" position={Position.Top} className={styles.handle} />
      <div className={styles.label}>{data.label}</div>
    </div>
  );
}
