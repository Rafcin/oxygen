// @ts-check
/* eslint-disable turbo/no-undeclared-env-vars */
/* eslint-disable import/order */
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/**
 * @note(pnpm) pass ENV variable to determine if we should transpile
 *            ./src  == transpile
 *            ./dist != transpile
 */

const transpilePackages = ["@oxygen/design-system"]

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
    // @ts-ignore
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  },
})


const protocol = "https"
/**
 * @note(pnpm) until we move "websites" into "packages"...
 *
 * When developing locally:
 * - pnpm dev:ds
 * - OR update .env => pnpm dev
 *
 * This maps all the externals required for proper localized
 *  files system path mapping.
 */
const isLocal = process.env.DESIGN_SYSTEM__LINK === 'true' ? true : false
const externals = [
  '@types/react',
  'react',
  'react-dom',
]
const isLocalDebugMessages = [
  `warn  - [ 📝 ]  pnpm link...`,
  `warn  - [ 🔗 ]  @oxygen/design-system`,
]

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  basePath: '',
  cleanDistDir: true,
  compress: true,
  // crossOrigin: 'same-origin',
  devIndicators: { buildActivity: true, buildActivityPosition: 'bottom-right' },
  distDir: './.next',
  // env,
  eslint: {
    // @note(eslint) handled outside of next
    ignoreDuringBuilds: true,
  },
  excludeDefaultMomentLocales: true,
  experimental: {
    appDir: false,
    legacyBrowsers: false,
    //esmExternals: "loose",
    //outputFileTracingRoot: path.join(__dirname, "../..")
  },
  transpilePackages,
  httpAgentOptions: {
    keepAlive: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    deviceSizes: [743, 744, 1127, 1128, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "44.228.116.190",
      "**.amazonws.com",
      "**.example.com",
      "**.googleapis.com",
    ],
    remotePatterns: [
      {
        protocol,
        hostname: `**.${process.env.NEXT_PUBLIC_SITE}`,
      },
      // @note(remotePattern) Google Apis
      {
        protocol,
        hostname: `**.googleapis.com`,
      },
      // @note(remotePattern) Future proofing "other" websites
      {
        protocol,
        hostname: `**.example.com`,
      },
      // @note(remotePattern) AWS
      {
        protocol,
        hostname: `**.amazonaws.com`,
      },
      // @note(remotePattern) Twitter
      {
        protocol,
        hostname: `pbs.twimg.com`,
      },
      // @note(remotePattern) Unsplash
      {
        protocol,
        hostname: `images.unsplash.com`,
      },
      // @note(remotePattern) Picsum
      {
        protocol,
        hostname: `picsum.photos`,
      }
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 18144000, // 1 month
  },
  optimizeFonts: true,
  outputFileTracing: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  typescript: {
    // @note(typescript) handled outside of next
    ignoreBuildErrors: true,
  },
  // @ts-ignore
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // @note(pnpm)  path mapping if working locally
    if (isLocal) {
      isLocalDebugMessages.map((msg) =>
        console.debug('\x1b[33m%s\x1b[0m', 'warn', ' - ', msg)
      )
      externals.map((ext) => {
        console.debug('\x1b[33m%s\x1b[0m', 'warn', ' - [ 📦 ] ›  ', ext)
        // @note(npmrc) shamefully-hoist === node_modules at root
        // @todo(npmrc) would be nice to not shamefully-hoist
        config.resolve.alias[ext] = path.resolve(
          __dirname,
          '..',
          '..',
          'node_modules',
          ext
        )
      })
    }

    return config
  },
}

/**
 * @note
 * Plugins cannot handle their own Configuration at this time.
 */
 const plugins = [withBundleAnalyzer, withMDX]
 module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig)