import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import Button from '@mui/material/Button/Button';
import { FC, useEffect } from 'react';
import { useBuildConfigReducer } from '../../hooks/useBuildConfigReducer';
import './FlowCanvas.scss';

const FlowCanvas: FC = () => {
  const { flowNodes, toggleBuildConfigNode } = useBuildConfigReducer();

  useEffect(() => {
    console.log("flowNodes in FLow Canvas", flowNodes);
  }, [flowNodes]);

  const styles = {
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    padding: 1,
    margin: 1,
    width: '100%',
  }

  return (
    <div className="flow-canvas">
      <div className="flow-title">
        Task Flow
      </div>
      <div className="flow-grid">
        {flowNodes.map((node) => {
          return (
            <div key={`${node.id}`} className="flow-row">
              {node.isActive ? (<>
                <div className="flow-node">
                </div>
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
          );
        })}
      </div>
    </div>
  );
}

export default FlowCanvas;