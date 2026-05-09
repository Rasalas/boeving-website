/**
 * Prefix an absolute path with the configured `import.meta.env.BASE_URL`.
 *
 * Use this for every reference to a static file in `/public/...`, so the same
 * code works at the root (`/`) and on a GitHub Pages subpath
 * (e.g. `/boeving-website/`).
 *
 *   <img src={asset("/images/exterior/facade.jpg")} />
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};
