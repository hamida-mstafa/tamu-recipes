import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  {
    path: 'recipe', children: [
      { path: ':id', component: RecipeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
