import { Component, OnInit } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  constructor(private route: ActivatedRoute, public spacexApi: SpacexAPIService) {
    spacexApi.getSpecificLaunch(this.route.snapshot.paramMap.get('LN'));
  }
  apiData: any;

  ngOnInit() {
    this.spacexApi.spacexData.subscribe(data => this.apiData = data);
  }
}
