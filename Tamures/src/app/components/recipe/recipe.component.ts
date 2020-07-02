import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id:number
  recipe:Recipe

  constructor(private route:ActivatedRoute, private recipeService:RecipesService) { }
getRecipe(){
  this.recipeService.getRecipe(this.id)
  .subscribe(
    data=>{
      this.recipe = data
    }
  )
}
  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.getRecipe()
  }

}
