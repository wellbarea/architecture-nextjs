import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Props } from "./types";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        cacheTime: 1 * 60 * 1000, // 1 minute
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: process.env.NODE_ENV === `test` ? () => {} : console.error,
    },
});

const ReactQueryProvider = ({ children, dehydratedState }: Props) => (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="bottom-right" />
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
  
  export default ReactQueryProvider;
  