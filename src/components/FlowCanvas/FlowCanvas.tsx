import { FC, useEffect } from 'react';
import { useBuildConfigReducer } from '../../hooks/useBuildConfigReducer';
import './FlowCanvas.scss';

const FlowCanvas: FC = () => {
  const { flowNodes } = useBuildConfigReducer();

  useEffect(() => {
    console.log("flowNodes in FLow Canvas", flowNodes);
  }, [flowNodes]);

  return (
    <div className="flow-canvas">
      {flowNodes.map((node) => {
        return (
          <div key={`${node.id}`} className="flow-canvas-node">
            <div className="flow-canvas-node-content">
              <div className="flow-canvas-node-name">
                {node.name} {node.isActive ? "+" : "-"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FlowCanvas;