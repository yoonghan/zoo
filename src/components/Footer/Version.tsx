"use client"

import { useDisableVersioning } from "../util/hook/disableVersioning/useDisableVersioning"

export const Version = () => {

  const { isVersioned } = useDisableVersioning()

  return <div className={isVersioned?"block":"hidden"}>(ver. {process.env.RELEASE_VERSION || 'local'})</div>
}
