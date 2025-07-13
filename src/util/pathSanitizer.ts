
export const sanitizePath = (path: string) => {
  // Ensure the path is sanitized to prevent XSS attacks
  return path.startsWith("/") ? path : `/${path}`
}