"use client"

import { useDisableVersioning } from "../util/hook/disableVersioning/useDisableVersioning"

export const Version = ({version}: {version: string}) => {

  const { isVersioned } = useDisableVersioning()

  return <div className={isVersioned?"block":"hidden"}>(ver. {version})</div>
}
