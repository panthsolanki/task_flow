import { ReactElement } from "react"
import { initState } from "../constants/buildConfig"
import { BuildConfigContext, useBuildConfigContext } from "../context/BuildConfigContext"

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined
}

const BuildConfigContextProvider = ({ children }: ChildrenType) => {
  return (
    <BuildConfigContext.Provider value={useBuildConfigContext(initState)}>
      {children}
    </BuildConfigContext.Provider>
  )
}

export default BuildConfigContextProvider;