import {PropsWithChildren} from "react";
import styles from './card.module.css'


export function CardBox(props: PropsWithChildren) {


    return (
        <ul className={styles.box}>
            {props.children}
        </ul>
    )
}


export interface CardType {
    name: string
    content: string
    date: string
}

type CardProps = {
  card : CardType
}

export function Card(props: CardProps) {


    return (
        <>
            <li className={styles.card}>
                <div className={styles.title}>{props.card.name}</div>
                <div className={styles.content}>{props.card.content}</div>
                <div className={styles.date}>{props.card.date}</div>
            </li>
        </>
    )
}