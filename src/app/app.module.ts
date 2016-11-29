import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRouteModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { PhilgoApiModule } from './api/philgo-api/v2/philgo-api-module';
import { ForumModule } from './pages/forum/forum-module';
import { JobModule } from './pages/job/app/job-module';
import { AboutComponent } from './pages/about/about.component';
import { LanguagePipeModule } from './pipes/language.pipe.module';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouteModule,
    LanguagePipeModule,
    ForumModule,
    PhilgoApiModule,
    JobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
