import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILocation} from '../modals/location';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<ILocation[]> {
    console.log('getting');
    return this.http.get<ILocation[]>('/api/all/locations');
  }
}
