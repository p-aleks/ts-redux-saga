export interface ICard {
    id: number;
    title: string;
    url: string;
    media_type?: string;
}

export interface IState {
    loading: boolean;
    error: boolean;
    cards: ICard[];
}

export interface IAction {
    type: string;
    payload?;
}

export interface IFetchCardsFunc {
    request: (payload: number) => IAction;
    success: (data: ICard[]) => IAction;
    failure: (error: boolean) => IAction;
}