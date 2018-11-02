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
    return this.http.get<ILocation[]>('http://localhost:8080/all/locations');
  }

  saveLocations(location: string) {
    return this.http.post('http://localhost:8080/save/locations', location);
  }
}
