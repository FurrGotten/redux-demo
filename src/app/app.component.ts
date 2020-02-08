import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Store } from 'redux';
import { AppStore, AppState} from './app.store';
import * as CounterActions from './redux-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  counter: number;
  storeUnsubscribe: () => void;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.storeUnsubscribe = this.store.subscribe(() => this.readState());
    this.readState();
  }

  ngOnDestroy(): void {
    this.storeUnsubscribe();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}

