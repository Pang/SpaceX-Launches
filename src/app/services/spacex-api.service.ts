import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILaunches } from '../interfaces/launches.interface';

@Injectable({
  providedIn: 'root'
})
export class SpacexAPIService {
  constructor(private http: HttpClient) {}

  private ApiData = new BehaviorSubject<[]>([]);
  spacexData = this.ApiData.asObservable();

  getPastLaunches(): Observable<ILaunches[]> {
    return this.http.get<ILaunches[]>(`https://api.spacexdata.com/v3/launches/past?order=desc`);
  }

  getSpecificLaunch(num: string): Observable<ILaunches[]> {
    return this.http.get<ILaunches[]>(`https://api.spacexdata.com/v3/launches/${num}`);
  }

  getFutureLaunches(): Observable<ILaunches[]> {
    return this.http.get<ILaunches[]>(`https://api.spacexdata.com/v3/launches/upcoming`);
  }
}
