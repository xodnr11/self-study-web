"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/app/queryClient"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  )
}
