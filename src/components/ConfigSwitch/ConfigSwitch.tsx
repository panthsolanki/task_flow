import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Switch from '@mui/material/Switch/Switch';
import { FC } from 'react';
import { useBuildConfigReducer } from '../../hooks/useBuildConfigReducer';

type ConfigSwitchProps = {
  key: string,
  code: string,
  label: string,
}
const ConfigSwitch: FC<ConfigSwitchProps> = (props: ConfigSwitchProps) => {
  const { key, code, label } = props;
  const { flowNodes, toggleBuildConfigNode } = useBuildConfigReducer();

  const flowNode = flowNodes.find(node => node.code === code);
  const onToggleChange = (code: string = "", isActive: boolean = false): void => {
    toggleBuildConfigNode(code, isActive);
  }

  return <FormControlLabel
    key={key}
    className="switch-label"
    control={
      <Switch
        size="medium"
        disableRipple={true}
        checked={flowNode?.isActive}
        onChange={() => onToggleChange(flowNode?.code, !flowNode?.isActive)}
        name={label}
      />
    }
    label={label}
    sx={{
      margin: 0,
      paddingTop: 1,
      paddingBottom: 1,
      borderBottom: 2,
      borderColor: '#ECEEF2',
      color: '#262626',
    }}
  />
}

export default ConfigSwitch;