import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexAPIService {
  constructor(private http: HttpClient) {}

  private ApiData = new BehaviorSubject<any>('');
  spacexData = this.ApiData.asObservable();

  getPastLaunches() {
    return this.http.get(`https://api.spacexdata.com/v3/launches/past?order=desc`)
      .subscribe((res) => {
        this.ApiData.next(res);
      });
  }

  getSpecificLaunch(num: string) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${num}`)
      .subscribe((res) => {
        this.ApiData.next(res);
      });
  }

  getFutureLaunches() {
    return this.http.get(`https://api.spacexdata.com/v3/launches/upcoming`)
      .subscribe((res) => {
        this.ApiData.next(res);
      });
  }
}
