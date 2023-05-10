import { FC } from 'react';
import FlowCanvas from '../../components/FlowCanvas/FlowCanvas';
import FlowSetting from "../../components/FlowSetting/FlowSetting";
import Header from "../../components/Header/Header";
import { initState } from '../../constants/buildConfig';
// import { BuildConfigProvider } from '../../context/BuildConfigContext';
import BuildConfigContextProvider from '../../HOC/BuildConfigContextProvider';
import buildConfigReducer from '../../reducers/buildConfigReducer';
import "./BuildConfigPage.scss";

const BuildConfigPage: FC = () => {
  return <BuildConfigContextProvider>
    <Header />
    <div className="container">
      <div className="chart-container">
        <FlowCanvas />
      </div>
      <div className="setting-container">
        <FlowSetting />
      </div>
    </div>
  </BuildConfigContextProvider>
}

export default BuildConfigPage;