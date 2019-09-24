import * as fromAction from './../contador.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {

   }

  ngOnInit() {
    this.store.select('count').subscribe( contador => {
      this.contador = contador;
      console.log('Hijo: ', this.contador);
    });
  }

  multiplicar() {
    const action = new fromAction.MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new fromAction.DividirAction(2);
    this.store.dispatch(action);
  }

  resetHijo(e: number) {
    this.contador = e;
  }

}
