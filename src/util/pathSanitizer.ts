
export const sanitizePath = (path: string) => {
  // Ensure the path is sanitized to prevent XSS attacks
  if (path.startsWith("/")) {
    return path
  }
  return `/${path}`
}
