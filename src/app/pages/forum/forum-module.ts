import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LanguagePipeModule } from '../../pipes/language.pipe.module';
import { ForumIndexComponent } from './forum-index/forum-index.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumEditComponent } from './forum-edit/forum-edit.component';
import { Post } from '../../api/philgo-api/v2/post';
export let ROUTES = [
        { path: "forum", component: ForumIndexComponent, name: 'ForumIndex' },
        { path: "forum/:post_id", component: ForumListComponent, name: 'ForumList' }
];
@NgModule({
  declarations: [
    ForumIndexComponent,
    ForumListComponent,
    ForumEditComponent
  ],
  imports: [
      BrowserModule,
      LanguagePipeModule
  ],
  providers: [ Post ]
})
export class ForumModule {}
