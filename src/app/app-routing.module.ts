import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LocationComponent} from './location/location.component';

const routes: Routes = [
  {
    path: 'locations',
    component: LocationComponent
  }
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent
  // },
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
