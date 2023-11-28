'use client'

import {atom} from "recoil";


export interface HomeState {
    tab: 'a' | 'b'
}

export const homeAtom = atom<HomeState>({
    key: 'homeAtom',
    default: {
        tab: 'a',
    }
})