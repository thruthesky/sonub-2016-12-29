import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'forum', component: HomePageComponent, data: { title: 'Page Two'} },
  { path: 'forum/:name', component: HomePageComponent, data: { title: 'Page Two'} },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found ...'} }
];

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
})
export class AppRouteModule {}