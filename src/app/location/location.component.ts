import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LocationService} from '../services/location.service';
import {ILocation} from '../modals/location';
import {first} from 'rxjs/operators';
import {error} from 'util';
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  page: '4';
  collection: any[];
  public errorMessage;
  private readonly notifier: NotifierService;

  constructor(
    private location_service: LocationService,
    alertService: NotifierService) {
    this.notifier = alertService;
  }

  ngOnInit() {
    this.location_service.getLocations()
      .subscribe(data => this.collection = data);
    this.notifier.notify('error', 'test error', 'LOCATION REGISTRATION FAILED!');
  }


  onSubmit(place: string) {
    this.location_service.saveLocations(place).pipe(first()).subscribe(data => {
        this.notifier.notify('success', 'Location saved.', 'LOCATION REGISTRATION');
      },
      error1 => {
        this.notifier.notify('error', error1, 'LOCATION REGISTRATION FAILED!');
      });
  }

}
