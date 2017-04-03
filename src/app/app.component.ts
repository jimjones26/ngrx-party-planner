import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_PERSON, ADD_GUEST, REMOVE_GUEST, REMOVE_PERSON, TOGGLE_ATTENDING } from './actions/app.actions';
import { id } from './id';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model;

  constructor(
    private _store: Store<any>
  ) {
    /*
      Every time people or partyFilter emits, pass the latest
      value from each into supplied function. We can then calculate
      and output statistics.
    */
    this.model = Observable.combineLatest(
      _store.select('people'),
          _store.select('partyFilter'),
      (people, filter) => {
        return {
          total: people.length,
            people: people.filter(filter),
          attending: people.filter(person => person.attending).length,
          guests: people.reduce((acc, curr) => acc + curr.guests, 0)
        };
      });
  }

  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name) {
    this._store.dispatch({ type: ADD_PERSON, payload: name });
  }

  addGuest(id) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id });
  }
  // ngOnDestroy to unsubscribe is no longer necessary
}
