import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LaunchesComponent } from './launches/launches.component';
import { AppComponent } from './app.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { FutureLaunchesComponent } from './future-launches/future-launches.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LaunchCardComponent,
    FutureLaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LaunchCardComponent },
      { path: 'launch/:LN', component: LaunchesComponent },
      { path: 'upcoming', component: FutureLaunchesComponent},
    ],
    { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
