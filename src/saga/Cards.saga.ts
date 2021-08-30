import { call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { DELETE_CARD_REQUEST, deleteCardAction, GET_CARDS_REQUEST, getCardsAction } from '../store/actions';
import IDGenerator from '../utils/idGenerator';
import { IAction, ICard, IState } from "../types/types";

type deleteCardArgsArr = [
    cards: ICard[],
    id: number
]

interface fetchCardsResp {
    data: ICard[]
}

const getCards = (state: IState): ICard[] => state.cards;

const fetchCard = (count: number) => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`);
};

function deleteCard ([cards, id]: deleteCardArgsArr): ICard[] {
    return cards.filter(card => card.id !== id);
}

function mapCards (resp: fetchCardsResp): any {
    return resp.data
        .filter(card => card.media_type === 'image')
        .map(
            card => (
                { id: IDGenerator.next().value, title: card.title, url: card.url }
            )
        )
}

function* fetchCardsWorker (action: IAction) {
    try {
        const resp = yield call(fetchCard, action.payload);
        const data = yield call(mapCards, resp);
        yield put(getCardsAction.success(data));
    } catch (e) {
        yield put(getCardsAction.failure(!!e));
    }
}

function* deleteCardWorker (action: IAction) {
    try {
        const cards = yield select(getCards);
        const data = yield call(deleteCard, [cards, action.payload]);
        yield put(deleteCardAction.success(data));
    } catch (e) {
        yield put(deleteCardAction.failure(!!e));
    }
}


export function* cardsWatcher () {
    yield takeEvery(GET_CARDS_REQUEST, fetchCardsWorker);
    yield takeEvery(DELETE_CARD_REQUEST, deleteCardWorker);
}

