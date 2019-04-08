import { Component, OnInit } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  constructor(public spacexApi: SpacexAPIService) {
    spacexApi.getPastLaunches(this.launchOffset);
  }
  apiData: any[];
  launchOffset = 0;

  ngOnInit(): void {
    this.spacexApi.spacexData.subscribe(data => this.apiData = data);
  }

  nextPage() {
    this.launchOffset += 10;
    this.spacexApi.getPastLaunches(this.launchOffset);
  }

  lastPage() {
    if (this.launchOffset !== 0) {
      this.launchOffset -= 10;
      this.spacexApi.getPastLaunches(this.launchOffset);
    }
  }

}
