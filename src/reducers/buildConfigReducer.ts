import { actionTypes } from "../constants/buildConfig";

function buildConfigReducer(state: appState, action: AppAction) {
  const { type } = action;
  const newFlowNodes = [...state.flowNodes];
  switch (type) {
    case actionTypes.ADD_FLOW_NODE:
      const newFlowNode = action?.payload;
      newFlowNodes.forEach(node => {
        if (node.id === newFlowNode.parentId && node.subTasks) {
          if (!node.subTasks.find(task => task.id === newFlowNode.id)) {
            node.subTasks = [newFlowNode, ...node.subTasks];
          }
        }
      });
      return {
        ...state,
        flowNodes: newFlowNodes
      };
    case actionTypes.DELETE_SUBTASK_NODE:
      const delFlowNode = action?.payload;
      newFlowNodes.forEach(node => {
        if (node.id === delFlowNode.parentId && node.subTasks) {
          node.subTasks = [...node.subTasks.filter(t => t.id !== delFlowNode.id)];
        }
      });
      return {
        ...state,
        flowNodes: newFlowNodes
      };
    case actionTypes.TOGGLE_FLOW_NODE:
      const { code, isActive } = action?.payload;
      newFlowNodes.forEach(node => {
        if (node.code === code) {
          node.isActive = isActive;
        }
      });
      return {
        ...state,
        flowNodes: newFlowNodes
      };
    default:
      return state;
  }
}

export default buildConfigReducer;