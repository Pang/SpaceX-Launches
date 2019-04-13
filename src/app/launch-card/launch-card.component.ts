import { Component } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent {
  public apiData = [];

  constructor(public spacexApi: SpacexAPIService) {
    this.spacexApi.getPastLaunches()
        .subscribe(data => this.apiData = data);
  }

}
