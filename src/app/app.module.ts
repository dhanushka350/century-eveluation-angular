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
import {SuiModule} from 'ng2-semantic-ui';
import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';
import { RejectedProjectsComponent } from './rejected-projects/rejected-projects.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavibarComponent,
    LocationComponent,
    RejectedProjectsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTableModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
