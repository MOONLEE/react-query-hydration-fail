# React-Query-Hydration-Fail
When gcTime is zero in app router, it make Hydration Fail   
If you use page router, it is not happen 

![img.png](img.png)

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Test Url 
```
localhost:3000
```


### /app/provider.tsx

```
const [queryClient] = React.useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 5 * 1000,
                    gcTime: 0,  // 0 make hydration fail in app router
                }
            }
        })
    }
);
```

