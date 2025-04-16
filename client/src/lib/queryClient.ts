import { QueryClient } from "@tanstack/react-query";

// Serverless implementation with local data

// Mock API function for serverless operation
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  // In a truly serverless app, this would connect to a serverless function
  // For now, we'll just handle local operations
  console.log(`Serverless API Request: ${method} ${url}`, data);
  
  // Simulate successful response
  return {
    ok: true,
    json: () => Promise.resolve({ success: true, data }),
    text: () => Promise.resolve(JSON.stringify({ success: true, data }))
  };
}

// Create and configure the query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // No default queryFn since we're not making real API calls
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
