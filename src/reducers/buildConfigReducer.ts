import { actionTypes } from "../constants/buildConfig";

function buildConfigReducer(state: appState, action: AppAction) {
  const { type } = action;
  console.log("state", state);

  switch (type) {
    case actionTypes.ADD_FLOW_NODE:
      const newFLowNode = action?.payload;
      console.log("payload", newFLowNode);
      return state;
    case actionTypes.TOGGLE_FLOW_NODE:
      const { code, isActive } = action?.payload;
      const newFlowNodes = [...state.flowNodes];
      newFlowNodes.forEach(node => {
        if (node.code === code) {
          console.log("node", node.isActive);
          node.isActive = isActive;
        }
      });
      console.log("payload TOGGLE_FLOW_NODE", code);
      console.log("newFlowNodes", newFlowNodes);
      return {
        ...state,
        flowNodes: newFlowNodes
      };
    default:
      return state;
  }
}

export default buildConfigReducer;