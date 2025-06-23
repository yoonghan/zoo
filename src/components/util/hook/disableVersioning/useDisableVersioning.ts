import { useEffect, useState } from "react"

export const disableVersionRegex = /.*[?|&]version=none.*/

export function useDisableVersioning() {
  const [isVersioned, setIsVersioned] = useState(false)

  useEffect(() => {
    let query = window.location.search
    const disabled = disableVersionRegex.test(query)
    setIsVersioned(!disabled)
  }, [])

  return {
    isVersioned,
  }
}
