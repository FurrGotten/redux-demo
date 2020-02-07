import {
  AnyAction,
  ActionCreator
} from 'redux';

export const INCREMENT = 'INCREMENT';
export const increment: ActionCreator<AnyAction> = () => ({
  type: INCREMENT
});

export const DECREMENT = 'DECREMENT';
export const decrement: ActionCreator<AnyAction> = () => ({
  type: DECREMENT
});
