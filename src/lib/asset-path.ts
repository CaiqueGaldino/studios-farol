/**
 * Helper function to get the correct asset path for GitHub Pages deployment
 * Adds the basePath prefix when in production
 */
export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/studios-farol' : '';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
