import type { Node } from '@xyflow/react';

export type TopologyNodeData = {
    label: string;
    address: string;
    mask: string;
    nodeType: 'router' | 'server' | 'pc';
}

export type AppNode = Node<TopologyNodeData, 'topology-node'>;
