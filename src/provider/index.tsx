"use client"
import 'normalize.css/normalize.css';

import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";

function Provider({ children }: { children: React.ReactNode }) {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Provider;