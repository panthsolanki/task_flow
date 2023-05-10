type flowNode = {
  id: number,
  name: string,
  isActive: boolean,
  code: string,
  subTasks?: subTask[],
}

type subTask = {
  id: number,
  name: string,
  isActive: boolean,
  parentId: number,
}

type AddFlowNodeAction = { type: 'ADD_FLOW_NODE'; payload: subTask };
type ToggleFlowNodeAction = {
  type: 'TOGGLE_FLOW_NODE', payload: { code: string, isActive: boolean }
};
type GetFlowNodesAction = { type: 'GET_FLOW_NODES' };

type AppAction = AddFlowNodeAction | ToggleFlowNodeAction | GetFlowNodesAction;

type appState = {
  flowNodes: flowNode[]
}
