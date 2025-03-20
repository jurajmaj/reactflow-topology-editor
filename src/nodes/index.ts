import type { NodeTypes } from '@xyflow/react';
import { AppNode } from './types';
import { TopologyNode } from './TopologyNode';

export const initialNodes: AppNode[] = [
  { id: 'a',
    type: 'topology-node', 
    position: { x: -300, y: 200 }, 
    data: { label: 'PC1', address: "192.168.22.6", mask: "255.255.255.0", nodeType: "pc" } },
  {
    id: 'b',
    type: 'topology-node',
    position: { x: -100, y: 200 },
    data: { label: 'PC2', address: "192.168.22.7", mask: "255.255.255.0", nodeType: "pc" }
  },
  {
    id: 'c',
    type: 'topology-node',
    position: { x: -200, y: 0 },
    data: { label: 'R1', address: "192.168.22.1", mask: "255.255.255.0", nodeType: "router" }
  },
];

export const nodeTypes = {
  'topology-node': TopologyNode,
} satisfies NodeTypes;
