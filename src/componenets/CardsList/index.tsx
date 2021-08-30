import React, { FC }                              from 'react';
import { useDispatch, useSelector }         from 'react-redux';
import { deleteCardAction, getCardsAction } from '../../store/actions';
import Card                                 from '../Card';
import Loader                               from '../Loader';
import styles                               from './CardsList.module.scss';
import { ICard } from "../../types/types";
import { RootState } from "../../store";

const CardsList: FC = () => {
    const dispatch = useDispatch();

    const cards: ICard[] = useSelector((state: RootState) => state.cards);
    const isLoading = useSelector((state: RootState) => state.loading);

    const fetchCards = (count: number) => {
        dispatch(getCardsAction.request(count));
    };

    const deleteCard = (id: number) => {
        dispatch(deleteCardAction.request(id));
    };

    React.useEffect(() => {
        fetchCards(5);
    }, []);

    return (
        <div className={styles.cardsList}>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <>
                        <div className={styles.cardsHeading}>
                            <h1>Cards</h1>
                            <button onClick={() => fetchCards(5)}>Download More</button>
                        </div>
                        <div className={styles.cards}>
                            {cards.map(data => <Card key={data.id} card={data} onDelete={deleteCard} />)}
                        </div>
                    </>
            }
        </div>
    );
};

export default CardsList;
