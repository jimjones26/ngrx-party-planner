import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { StoreModule } from '@ngrx/store';
import { people } from './reducers/people.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';

import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(people),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
