/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['qunxvqdqkghdgzswtsxv.supabase.co'],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
}

module.exports = nextConfig
