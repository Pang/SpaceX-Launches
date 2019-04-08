import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LaunchesComponent } from './launches/launches.component';
import { AppComponent } from './app.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LaunchCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LaunchCardComponent },
      { path: ':LN', component: LaunchesComponent },
      { path: '**', component: LaunchCardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
