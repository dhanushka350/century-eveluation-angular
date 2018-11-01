import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LocationService} from '../services/location.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  page: '4';
  collection: any[];

  constructor(private location_service: LocationService) {

  }

  ngOnInit() {
    this.location_service.getLocations().subscribe(data => this.collection = data);
  }

}
