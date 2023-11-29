'use client'

import MainCard from "@/components/MainCard";
import { homeAtom } from "@/state/state";
import { useRecoilState } from "recoil";

export default function View() {

    const [state, setState] = useRecoilState(homeAtom);


    return (
        <>
            {state.tab === 'a' ?
            <div>tab a</div>
            :
            <div>tab b</div>
            }

            <MainCard />
        </>
    )
}