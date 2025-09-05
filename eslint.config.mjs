/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Giúp bắt bug sớm trong dev
  experimental: {
    appDir: true, // Bật App Router (Next 13+)
  },
  // Nếu muốn build ra thư mục khác thay vì .next
  // distDir: "build",
}

module.exports = nextConfig
