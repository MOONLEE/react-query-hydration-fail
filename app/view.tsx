'use client'

import {Card, CardBox} from "@/components/card";
import {useRecoilState} from "recoil";
import {homeAtom} from "@/state";
import MainCard from "@/components/MainCard";

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