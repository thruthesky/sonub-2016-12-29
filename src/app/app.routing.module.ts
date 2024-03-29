import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';

import { ROUTES as PHILGO_ROUTES } from './api/philgo-api/v2/philgo-api-module';
import { ROUTES as FORUM_ROUTES } from './pages/forum/forum-module';
import { ROUTES as JOB_ROUTES } from './pages/job/app/job-module';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found ...'} }
];
PHILGO_ROUTES.map( e => appRoutes.unshift( e ) );
FORUM_ROUTES.map( e => appRoutes.unshift( e ) );
JOB_ROUTES.map( e => appRoutes.unshift( e ) );
//console.log('app.routing.module: ', appRoutes);

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
})
export class AppRouteModule {}