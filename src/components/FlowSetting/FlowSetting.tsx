import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { FC } from 'react';
import { flowToggleArr } from '../../constants/buildConfig';
import ConfigSwitch from '../ConfigSwitch/ConfigSwitch';
import './FlowSetting.scss';

const FlowSetting: FC = () => {
  return (<>
    <div className="flow-setting-container">
      <h4 className="setting-title">Security Checks</h4>
      <FormControl component="fieldset" variant="standard">
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