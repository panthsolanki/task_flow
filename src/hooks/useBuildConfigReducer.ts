import { useContext } from 'react';
import { BuildConfigContext } from '../context/BuildConfigContext';

export const useBuildConfigReducer = () => {
  const {
    state: {
      flowNodes
    },
    addBuildConfigNode,
    deleteBuildConfigNode,
    toggleBuildConfigNode,
  } = useContext(BuildConfigContext);

  return {
    flowNodes,
    addBuildConfigNode,
    deleteBuildConfigNode,
    toggleBuildConfigNode,
  }
}