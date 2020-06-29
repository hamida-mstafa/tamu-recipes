import { HomepageComponent } from './components/homepage/homepage.component';
import { UpdateComponent } from './update/update.component';
import { SaveComponent } from './save/save.component';
import { FilterFtComponent } from './filter-ft/filter-ft.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

  { path: 'update', component: UpdateComponent },
  { path: 'save', component: SaveComponent },
  { path: 'filter', component: FilterFtComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homep', component: HomepageComponent },
  { path: '', redirectTo: "/homep", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent,

  UpdateComponent,
  BookmarkComponent,
  SaveComponent,
  FilterFtComponent,
  LoginComponent,
  ProfileComponent,
  PageNotFoundComponent
]
