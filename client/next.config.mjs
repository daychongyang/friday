import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

export default (phase) => {
  const host = process.env.TAURI_DEV_HOST || 'localhost'
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: isDev ? undefined : `http://${host}:9527`
  }

  return nextConfig
}
