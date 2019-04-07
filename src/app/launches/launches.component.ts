import { Component, OnInit } from '@angular/core';
import { SpacexAPIService } from '../services/spacex-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  constructor(public spacexApi: SpacexAPIService) {}
  apiData: any[];

  ngOnInit(): void {
    this.spacexApi.spacexData.subscribe(data => this.apiData = data);
  }

}
