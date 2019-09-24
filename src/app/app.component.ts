import { AppState } from './app.reducers';
import * as fromAction from './contador/contador.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('count').subscribe( contador => {
      this.contador = contador;
    });
  }

  incrementar() {

    const action = new fromAction.IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar() {
    const action = new fromAction.DecrementarAction();

    this.store.dispatch(action);
  }
}
