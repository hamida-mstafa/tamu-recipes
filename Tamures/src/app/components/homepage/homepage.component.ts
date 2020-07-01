import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  recipes: Recipe[]

  currentLocation: string
  getLocation() {
    this.currentLocation = window.location.host + '/'
  }

  constructor(private recipeService: RecipesService) { }

  displayRecipes() {
    this.recipeService.getRecipes()
    .subscribe(data=>{
      this.recipes = data
      console.log(data)
    })
  }


  ngOnInit(): void {
    this.getLocation();
    this.displayRecipes();
  }

}
