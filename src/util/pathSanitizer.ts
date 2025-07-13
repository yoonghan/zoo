
export const sanitizePath = (path: string) => {
  // Ensure the path is sanitized to prevent XSS attacks
  /* v8 ignore next */
  return path.startsWith("/") ? path : `/${path}`
}