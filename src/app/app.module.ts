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
import { AboutComponent } from './pages/about/about.component';
import { LanguagePipeModule } from './pipes/language.pipe.module';
import { JobIndexComponent } from './pages/job/job-index/job-index.component';
import { JobEditComponent } from './pages/job/job-edit/job-edit.component';
import { JobListComponent } from './pages/job/job-list/job-list.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    JobIndexComponent,
    JobEditComponent,
    JobListComponent,
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
    PhilgoApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
