import React, { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from "../../types/types";

interface CardProps {
    card: ICard
    onDelete: (id: number) => void
}

const Card: FC<CardProps> = ({ card, onDelete: handleDelete }) => {

    return (
        <div className={styles.card}>
            <img width={364} height={200} style={{ objectFit: 'cover' }} src={card.url} alt=""/>
            <p>{card.title}</p>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
        </div>
    );
};

export default Card;
