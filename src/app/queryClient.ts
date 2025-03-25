import { QueryClient } from "@tanstack/react-query"
import { showErrorMessage } from "@/utils/showErrorMessage"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      onError: showErrorMessage,
    },
  },
})
