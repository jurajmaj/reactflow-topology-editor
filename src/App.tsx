import { useCallback } from 'react';
import { ReactFlow, Background, Controls, MiniMap, addEdge, useNodesState, useEdgesState, useReactFlow, ConnectionMode,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import Toolbar from './toolbar/Toolbar';
import { AppNode } from "./nodes/types.ts";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');

    const position = screenToFlowPosition({
      x: event.clientX - 40,
      y: event.clientY - 40,
    });

    const newNode: AppNode = {
      id: `${type}-${nodes.length + 1}`,
      type: 'topology-node',
      position,
      data: { label: '', address: '', mask: '', nodeType: type as 'router' | 'pc' | 'server' },
    };

    setNodes((nodes) => nodes.concat(newNode));
  };

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      connectionMode={ConnectionMode.Loose}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
      <Toolbar />
    </ReactFlow>
  );
}
