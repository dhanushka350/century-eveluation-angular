import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LocationComponent} from './location/location.component';
import {ApprovedProjectsComponent} from './approved-projects/approved-projects.component';

const routes: Routes = [
  {
    path: 'locations',
    component: LocationComponent
  },
  {
    path: 'approved-projects',
    component: ApprovedProjectsComponent
  },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
