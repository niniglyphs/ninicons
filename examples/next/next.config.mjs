/** @type {import('next').NextConfig} */
export default {
  // Next can rewrite barrel imports into per-icon ones; with it, dev builds load only the icons a page uses.
  experimental: { optimizePackageImports: ['@ninicons/react'] },
};
