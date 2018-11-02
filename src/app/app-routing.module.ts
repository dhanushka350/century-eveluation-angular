import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LocationComponent} from './location/location.component';
import {ApprovedProjectsComponent} from './approved-projects/approved-projects.component';
import {AreawiseProjectsComponent} from './areawise-projects/areawise-projects.component';
import {RejectedProjectsComponent} from './rejected-projects/rejected-projects.component';
import {BrokerListComponent} from './broker-list/broker-list.component';
import {SalesOfficersComponent} from './sales-officers/sales-officers.component';

const routes: Routes = [
  {
    path: 'locations',
    component: LocationComponent
  },
  {
    path: 'approved-projects',
    component: ApprovedProjectsComponent
  },
  {
    path: 'areawise-projects',
    component: AreawiseProjectsComponent
  },
  {
    path: 'rejected',
    component: RejectedProjectsComponent
  },
  {
    path: 'broker',
    component: BrokerListComponent
  },
  {
    path: 'salesOfficers',
    component: SalesOfficersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
