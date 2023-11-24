import View from "@/app/view";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {getServerApiAxiosProxy} from "@/libs/axios/server";
import {HydrationBoundary} from "@tanstack/react-query";



export default async function Page() {

  const queryClient = new QueryClient()
  await queryClient.fetchQuery({
    queryKey: ['getData'],
    queryFn: async () => {
      return await getServerApiAxiosProxy().get('/api/data')
    },
  })

  const state = dehydrate(queryClient)

  return (
      <>
        <HydrationBoundary state={state}>
          <View />
        </HydrationBoundary>
      </>
  )
}
