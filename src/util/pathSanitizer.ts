
export const sanitizePath = (path: string) => {
  if (path.startsWith("/")) {
    /* c8 ignore next */
    return path
  }

  /* c8 ignore next */
  return `/${path}`
}
