import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware           from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer }                    from './reducer';
import { cardsWatcher }               from '../saga/Cards.saga';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(cardsWatcher);

export type RootState = ReturnType<typeof reducer>;