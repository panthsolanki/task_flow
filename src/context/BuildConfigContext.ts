import {
  createContext,
  useCallback,
  useReducer,
} from "react";
import {
  actionTypes,
  defaultConfigNode,
  defaultFlowSubTask,
  initState,
} from "../constants/buildConfig";
import buildConfigReducer from "../reducers/buildConfigReducer";


export const useBuildConfigContext = (initState: appState) => {
  const [state, dispatch] = useReducer(buildConfigReducer, initState)

  const addBuildConfigNode = useCallback((node: subTask) => dispatch({
    type: actionTypes.ADD_FLOW_NODE,
    payload: node
  }), [])

  const toggleBuildConfigNode = useCallback((code: string, isActive: boolean) => dispatch({
    type: actionTypes.TOGGLE_FLOW_NODE,
    payload: { code, isActive }
  }), [])

  return { state, addBuildConfigNode, toggleBuildConfigNode }
}

type UseBuildConfigContextType = ReturnType<typeof useBuildConfigContext>

const initContextState: UseBuildConfigContextType = {
  state: initState,
  addBuildConfigNode: () => { },
  toggleBuildConfigNode: (code: string, isActive: boolean) => { },
}

export const BuildConfigContext = createContext<UseBuildConfigContextType>(initContextState);