import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UpdateComponent } from './update/update.component';
import { SaveComponent } from './save/save.component';
import { FilterFtComponent } from './filter-ft/filter-ft.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  {
    path: 'recipe', children: [
      { path: ':id', component: RecipeComponent },
    ]
  }


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'add', component: AddComponent },

  { path: 'update', component: UpdateComponent },
  { path: 'save', component: SaveComponent },
  { path: 'filter', component: FilterFtComponent },
  { path: 'bookmark', component: BookmarkComponent },

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
  ProfileComponent,
  AddComponent,

  UpdateComponent,
  BookmarkComponent,
  SaveComponent,
  FilterFtComponent,
  LoginComponent,

  PageNotFoundComponent
]
