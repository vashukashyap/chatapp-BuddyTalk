/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  env: {
    API_KEY: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
  }
}

module.exports = nextConfig
