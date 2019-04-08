import { Component, OnInit } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {

  constructor(public spacexApi: SpacexAPIService) {
    spacexApi.getPastLaunches();
  }
  apiData: any[];

  ngOnInit() {
    this.spacexApi.spacexData.subscribe(data => this.apiData = data);
  }

}
