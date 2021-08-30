import { IFetchCardsFunc } from "../types/types";

export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE';
export const DELETE_CARD_REQUEST = 'DELETE_CARD_REQUEST';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_FAILURE = 'DELETE_CARD_FAILURE';

export const getCardsAction: IFetchCardsFunc = {
    request: payload => ({type: GET_CARDS_REQUEST, payload}),
    success: data => ({type: GET_CARDS_SUCCESS, payload: data}),
    failure: error => ({type: GET_CARDS_FAILURE, payload: error}),
};

export const deleteCardAction: IFetchCardsFunc = {
    request: payload => ({type: DELETE_CARD_REQUEST, payload}),
    success: data => ({type: DELETE_CARD_SUCCESS, payload: data}),
    failure: error => ({type: DELETE_CARD_FAILURE, payload: error}),
};