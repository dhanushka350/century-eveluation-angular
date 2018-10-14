import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  page: '4';
  collection: any[];

  ngOnInit() {
    this.fillTable();
  }

  fillTable() {
    this.collection = [
      {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '5',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '1',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      }, {
        'id': '1',
        'Location': 'Galle',
        'Action': ''
      },
      {
        'id': '2',
        'Location': 'Matara',
        'Action': ''
      },
      {
        'id': '3',
        'Location': 'Ampara',
        'Action': ''
      },
      {
        'id': '4',
        'Location': 'Mahamodara',
        'Action': ''
      },
      {
        'id': '5',
        'Location': 'Colombo',
        'Action': ''
      },
    ];
  }
}
