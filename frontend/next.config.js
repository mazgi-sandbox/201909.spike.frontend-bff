const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')
const path = require('path')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const nextConfig = {
    publicRuntimeConfig: {
      // Will be available on both server and client
      IS_DEVELOPMENT: isDev,
      BFF_ENDPOINT_GRAPHQL: process.env.BFF_ENDPOINT_GRAPHQL,
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    webpack: (webpackConfig, options) => {
      webpackConfig.resolve.alias['components'] = path.join(__dirname, 'components')
      webpackConfig.resolve.alias['lib'] = path.join(__dirname, 'lib')
      return webpackConfig
    },
  }

  // next.config.js object
  return nextConfig
}
