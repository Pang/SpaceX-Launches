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
  private apiPhotos = new BehaviorSubject<any>('');
  spacexPhotos = this.apiPhotos.asObservable();

  getPastLaunches() {
    return this.http.get('https://api.spacexdata.com/v3/launches/past?order=desc&limit=10')
      .subscribe(
        (res: []) => {
          console.log(res);
          this.ApiData.next(res);
        });
  }
}
