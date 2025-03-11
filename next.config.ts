import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // async rewrites() {
  //   console.log("Rewrites Loaded!")
  //   console.log(`API Base URL: ${process.env.NEXT_PUBLIC_API_BASE_URL}`)
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
  //     },
  //   ]
  // },
}

export default nextConfig
