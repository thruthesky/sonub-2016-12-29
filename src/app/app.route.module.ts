import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoComponent } from './two/two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'two', component: TwoComponent, data: { title: 'Page Two'} },
  { path: 'two/:name', component: TwoComponent, data: { title: 'Page Two'} },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found ...'} }
];

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ] // export 하므로서 상위 module 에서 import { RouterModule } from 'app.route.module' 로 사용 할 수 있다. 즉, 직접 @anuglar/router 에서 import 할 필요가 없는 것이다.
})
export class AppRouteModule {}