import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import Button from '@mui/material/Button/Button';
import IconButton from '@mui/material/IconButton/IconButton';
import { FC, useMemo } from 'react';
import { defaultFlowSubTask } from '../../constants/buildConfig';
import { useBuildConfigReducer } from '../../hooks/useBuildConfigReducer';
import './FlowCanvas.scss';

const FlowCanvas: FC = () => {
  const {
    flowNodes,
    addBuildConfigNode,
    toggleBuildConfigNode,
  } = useBuildConfigReducer();

  const styles = {
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    padding: 1,
    margin: 1,
    width: '100%',
  }

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
                <Button
                  disableFocusRipple={true}
                  disableRipple={true}
                  disableElevation={true}
                  disableTouchRipple={true}
                  variant="text"
                  color="secondary"
                  sx={{
                    ...styles,
                    color: "#262626",
                  }}
                >
                  {subTask.name}
                </Button>
              </div>
            </div>)
        })
      }
      <div key={`{${node.id}_new}`} className="flow-row">
        {!isAllAdded && <div className="flow-node"></div>}
        <div className="flow-icon-node">
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
                    <Button
                      // disabled={true}
                      disableFocusRipple={true}
                      disableRipple={true}
                      disableElevation={true}
                      disableTouchRipple={true}
                      variant="text"
                      color="secondary"
                      sx={{
                        ...styles,
                        color: "#262626",
                      }}
                    >
                      {node.name}
                    </Button>
                  </div>
                </>) : (<>
                  <div className="flow-node">
                    <Button
                      disableFocusRipple={true}
                      disableRipple={true}
                      disableElevation={true}
                      disableTouchRipple={true}
                      variant="text"
                      startIcon={<ControlPointRoundedIcon />}
                      sx={styles}
                      onClick={() => toggleBuildConfigNode(node.code, !node.isActive)}
                    >
                      {node.name}
                    </Button>
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