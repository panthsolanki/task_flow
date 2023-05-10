import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import IconButton from '@mui/material/IconButton/IconButton';
import { FC, useMemo } from 'react';
import { defaultFlowSubTask } from '../../constants/buildConfig';
import { useBuildConfigReducer } from '../../hooks/useBuildConfigReducer';
import FlowNode from '../FlowNode/FlowNode';
import './FlowCanvas.scss';

const FlowCanvas: FC = () => {
  const {
    flowNodes,
    addBuildConfigNode,
    deleteBuildConfigNode,
    toggleBuildConfigNode,
  } = useBuildConfigReducer();

  const isAllAdded = useMemo(() => {
    return flowNodes.filter(node => !node.isActive).length === 0;
  }, [flowNodes]);

  const addBuildNode = (node: flowNode) => {
    const newSubTaskId = node?.subTasks?.length || 0;
    const newNode = {
      ...defaultFlowSubTask,
      parentId: node.id,
      id: newSubTaskId
    }
    addBuildConfigNode(newNode);
  }
  const renderSubTasks = (node: flowNode) => {
    if (node?.subTasks === undefined || !node.isActive) {
      return <></>
    }
    const subTasks = node?.subTasks || [];
    return (<>
      {
        subTasks.length > 0
        && node.subTasks?.map(subTask => {
          return (
            <div key={`{${node.id}_${subTask.id}}`} className="flow-row">
              {!isAllAdded && <div className="flow-node">
              </div>}
              <div className="flow-node">
                <FlowNode
                  node={subTask}
                  showDelete={true}
                  deleteNode={() => deleteBuildConfigNode(subTask)}
                />
              </div>
            </div>)
        })
      }
      <div key={`{${node.id}_new}`} className="flow-row">
        {!isAllAdded && <div className="flow-node"></div>}
        <div className="flow-node flow-icon-node">
          <IconButton
            disableFocusRipple={true}
            disableRipple={true}
            aria-label="plus"
            color="primary"
            onClick={() => addBuildNode(node)}
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>)
  }

  return (
    <div className="flow-canvas">
      <div className="flow-title">
        Task Flow
      </div>
      <div className="flow-grid">
        {flowNodes.map((node) => {
          return (
            <>
              <div key={`${node.id}`} className="flow-row">
                {node.isActive ? (<>
                  {!isAllAdded && <div className="flow-node">
                  </div>}
                  <div className="flow-node">
                    <FlowNode
                      node={node}
                      showDelete={false}
                    />
                  </div>
                </>) : (<>
                  <div className="flow-node">
                    <FlowNode
                      node={node}
                      addNode={() => toggleBuildConfigNode(node.code, !node.isActive)}
                      showDelete={false}
                    />
                  </div>
                  <div className="flow-node">
                  </div>
                </>)}
              </div>
              {renderSubTasks(node)}
            </>);
        })}
      </div>
    </div>
  );
}

export default FlowCanvas;