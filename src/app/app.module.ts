import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavibarComponent} from './navibar/navibar.component';
import {LocationComponent} from './location/location.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from 'angular-6-datatable';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ApprovedProjectsComponent} from './approved-projects/approved-projects.component';
import {SuiModule} from 'ng2-semantic-ui';
import {AreawiseProjectsComponent} from './areawise-projects/areawise-projects.component';
import {RejectedProjectsComponent} from './rejected-projects/rejected-projects.component';
import {NewLandComponent} from './new-land/new-land.component';
import {LocationService} from './services/location.service';
import {HttpClientModule} from '@angular/common/http';
import {NotifierModule} from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavibarComponent,
    LocationComponent,
    ApprovedProjectsComponent,
    AreawiseProjectsComponent,
    NewLandComponent,
    RejectedProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTableModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    SuiModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {

        horizontal: {

          position: 'right',
          distance: 12

        },

        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10

        }

      }
    })
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
