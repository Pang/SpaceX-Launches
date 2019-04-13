import { Component, OnInit } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';

@Component({
  selector: 'app-future-launches',
  templateUrl: './future-launches.component.html',
  styleUrls: ['./future-launches.component.css']
})
export class FutureLaunchesComponent {
  constructor(private spacexAPI: SpacexAPIService) {
    this.spacexAPI.getFutureLaunches()
        .subscribe(data => this.apiData = data);
  }
  apiData: any;

}
