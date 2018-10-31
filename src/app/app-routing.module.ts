import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LocationComponent} from './location/location.component';
import {RejectedProjectsComponent} from './rejected-projects/rejected-projects.component';

const routes: Routes = [
  {
    path: 'locations',
    component: LocationComponent
  },
  {
    path: 'rejected',
    component: RejectedProjectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
