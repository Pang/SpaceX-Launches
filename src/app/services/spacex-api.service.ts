import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexAPIService {
  constructor(private http: HttpClient) {
    this.getPastLaunches();
   }

  private ApiData = new BehaviorSubject<any>('');
  spacexData = this.ApiData.asObservable();

  getPastLaunches() {
    return this.http.get('https://api.spacexdata.com/v3/launches/past?order=desc')
      .subscribe(
        (res: []) => {
          console.log(res);
          this.ApiData.next(res);
        });
  }
}
