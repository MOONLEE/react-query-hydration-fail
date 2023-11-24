'use client'

import React, { ReactNode} from "react";
import {RecoilRoot} from "recoil";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient} from "@tanstack/react-query";


type Props = {
    children : ReactNode
}

export default function Provider({children}: Props ) {


    const [queryClient] = React.useState(() => {
            return new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 1000,
                        gcTime: 0,
                    }
                }
            })
        }
    );

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </RecoilRoot>
    )
}