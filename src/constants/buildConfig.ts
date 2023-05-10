export const initState: appState = {
  flowNodes: [{
    id: 1,
    name: "GIT checkout",
    code: "git_checkout",
    isActive: true,
    subTasks: [],
  }, {
    id: 2,
    name: "Code Analysis",
    code: "code_analysis",
    isActive: false,
    subTasks: [],
  }, {
    id: 3,
    name: "Credential Scan",
    code: "credential_scan",
    isActive: false,
    subTasks: [],
  }, {
    id: 4,
    name: "Docker Build",
    code: "docker_build",
    isActive: true,
    subTasks: [],
  }, {
    id: 5,
    name: "Docker Image Scan",
    code: "docker_image_scan",
    isActive: false,
    subTasks: [],
  }, {
    id: 6,
    name: "Docker Push",
    code: "docker_push",
    isActive: true,
  }]
}

export const defaultFlowSubTask: subTask = {
  id: 0,
  name: "defaultTask",
  isActive: false,
  parentId: 0,
}

export const defaultConfigNode: flowNode = {
  id: 1,
  name: "GIT checkout",
  isActive: true,
  code: "git_checkout",
  subTasks: [],
}

export const actionTypes = {
  ADD_FLOW_NODE: "ADD_FLOW_NODE",
  TOGGLE_FLOW_NODE: "TOGGLE_FLOW_NODE",
  GET_FLOW_NODES: "GET_FLOW_NODES",
} as const;

export const flowToggleArr = [{
  code: 'code_analysis',
  label: 'Static Code Analysis'
}, {
  code: 'credential_scan',
  label: 'Credential Scan'
}, {
  code: 'docker_image_scan',
  label: 'Docker Image Scan'
}]