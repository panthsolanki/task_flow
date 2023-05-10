import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import IconButton from '@mui/material/IconButton/IconButton';
import { FC, useCallback, useMemo } from 'react';
import './FlowNode.scss';

type FlowNodeProps = {
  node: flowNode | subTask,
  addNode?: Function,
  showDelete: boolean,
  deleteNode?: Function,
}
const FlowNode: FC<FlowNodeProps> = (props: FlowNodeProps) => {
  const {
    node,
    addNode,
    showDelete = false,
    deleteNode,
  } = props;
  // console.log("node", node.name, typeof deleteNode);

  const canAddNode = useMemo(() => typeof addNode === 'function', [addNode]);
  const onAddClick = useCallback((e: any) => {
    if (typeof addNode === 'function') {
      addNode(e);
    }
  }, [canAddNode, addNode]);

  const onDeleteClick = (e: any) => {
    if (showDelete && typeof deleteNode === 'function') {
      deleteNode(e);
    }
  }

  return <>{
    node.isActive
      ? <div
        className={showDelete ? 'flow-node-container can-delete' : 'flow-node-container'}
      >
        {showDelete && <div
          className='delete-icon-container'
          onClick={onDeleteClick}>
          <IconButton
            disableFocusRipple={true}
            disableRipple={true}
            aria-label="cancel"
            size="small"
            sx={{
              color: "#FFFFFF",
              backgroundColor: '#F44336',
              padding: 0,
            }}
          >
            <CancelOutlinedIcon fontSize="small" />
          </IconButton>
        </div>}
        <div className='flow-node-title'>{node.name}</div>
      </div>
      : <div className='flow-node-container not-active'
        onClick={onAddClick}>
        <IconButton
          disableFocusRipple={true}
          disableRipple={true}
          aria-label="plus"
          color="primary"
          size="small"
        >
          <ControlPointRoundedIcon />
          <div className='flow-node-title not-active'>{node.name}</div>
        </IconButton>
      </div>
  }
  </>
}

export default FlowNode;