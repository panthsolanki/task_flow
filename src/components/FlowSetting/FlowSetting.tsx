import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { FC } from 'react';
import { flowToggleArr } from '../../constants/buildConfig';
import ConfigSwitch from '../ConfigSwitch/ConfigSwitch';
import './FlowSetting.scss';

const FlowSetting: FC = () => {
  return (<>
    <div className="flow-setting-container">
      <FormControl component="fieldset" variant="standard">
        <FormLabel >Security Checks</FormLabel>
        <FormGroup>
          {flowToggleArr.map(flowNode => <ConfigSwitch
            key={flowNode.code.toString()}
            code={flowNode.code}
            label={flowNode.label}
          />)}
        </FormGroup>
      </FormControl>
    </div>
  </>)
}

export default FlowSetting;