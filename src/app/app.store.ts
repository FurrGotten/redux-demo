import {InjectionToken} from '@angular/core'

import {AnyAction, Reducer, Store, StoreEnhancer, compose, createStore} from 'redux';
import * as counterActions from './redux-actions';

export interface AppState {
  counter: number;
}

const initialState: AppState = { counter: 0 };

const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: AnyAction): AppState => {
    switch (action.type) {
      case counterActions.INCREMENT:
        return Object.assign({}, state, { counter: state.counter + 1 });
      case counterActions.DECREMENT:
        return Object.assign({}, state, { counter: state.counter - 1 });
      default:
        return state;
    }
  };


const devtools: StoreEnhancer<AppState> = window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;

function createAppStore(): Store<AppState> {
  return createStore<AppState, AnyAction, Store, Reducer>(
    counterReducer,
    compose(devtools)
  );
}

export const AppStore = new InjectionToken('App.store');

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
