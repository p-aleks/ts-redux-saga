import {
    DELETE_CARD_FAILURE,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    GET_CARDS_FAILURE,
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
}                       from './actions';
import { defaultState } from './state';
import { IAction, IState } from "../types/types";

export const reducer = (state: IState = defaultState, action: IAction) => {
    switch (action.type) {
        case GET_CARDS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: [...state.cards, ...action.payload],
            };
        case GET_CARDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_CARD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: action.payload,
            };
        case DELETE_CARD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};