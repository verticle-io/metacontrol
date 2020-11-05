
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUIModule } from '@swimlane/ngx-ui'

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AvatarModule } from 'ngx-avatar';
const avatarColors = ["#006AE0", "#0052AD", "#025E82", "#AD6D00", "#6839E1", "#3D179D", "#696969", "#647493", "#292929"];

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { NgxTypedJsModule} from 'ngx-typed-js';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';


registerLocaleData(localeDe, 'de');

const appRoutes: Routes = [

  {
    path: '',
    component: AppComponent,
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    NgxUIModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AvatarModule.forRoot({
      colors: avatarColors
    }),
    HttpClientModule,
    HttpClientJsonpModule,
    NgxTypedJsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
