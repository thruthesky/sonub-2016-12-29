import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouteModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { PhilgoApiModule } from './api/philgo-api/v2/philgo-api-module';
import { ForumModule } from './pages/forum/forum-module';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { LanguagePipeModule } from './pipes/language.pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    LanguagePipeModule,
    ForumModule,
    PhilgoApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
