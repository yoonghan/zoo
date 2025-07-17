
export const sanitizePath = (path: string) => {
  if (path.startsWith("/")) {
    return path
  }
  return `/${path}`
}
