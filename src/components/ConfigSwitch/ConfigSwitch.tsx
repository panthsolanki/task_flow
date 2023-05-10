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
  console.log("flowNode", flowNode);

  const onToggleChange = (code: string = "", isActive: boolean = false): void => {
    console.log("onToggleChange", code, isActive);
    toggleBuildConfigNode(code, isActive);
  }

  return <FormControlLabel
    key={key}
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
  />
}

export default ConfigSwitch;