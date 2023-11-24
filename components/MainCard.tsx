import {useClientNextApiProxy} from "@/libs/axios/client";
import {useQuery} from "@tanstack/react-query";
import {Card, CardBox, CardType} from "@/components/card";

export default function MainCard() {
    const axiosProxy = useClientNextApiProxy();

    const {
        status,
        data,
    } = useQuery({
        queryKey: ['getData'],
        queryFn: async () => {
            return await axiosProxy.get<CardType[], CardType[]>('/api/data')
        },
    })
    let content : CardType[] = [];
    if (status === 'success' && data) {
        content = data;
    }

    return (
        <>
            <div>test</div>
            <CardBox>
                {content.map(one => (<Card
                        key={one.name}
                        card={one} />
                ))}
            </CardBox>
        </>
    )
}