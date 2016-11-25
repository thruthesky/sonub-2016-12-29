import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ROUTES as XBASE_ROUTES } from './xbase-api/xbase-api-module';

const appRoutes: Routes = [
  { path: 'forum', component: HomePageComponent, data: { title: 'Page Two'} },
  { path: 'forum/:name', component: HomePageComponent, data: { title: 'Page Two'} },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found ...'} }
];
XBASE_ROUTES.map( e => appRoutes.unshift( e ) );
console.log(appRoutes);

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
})
export class AppRouteModule {}