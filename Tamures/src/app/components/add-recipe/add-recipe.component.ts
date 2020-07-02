import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  form: FormGroup
  constructor(public formBuilder:FormBuilder, private recipeService:RecipesService, private router:Router) {
    this.form = this.formBuilder.group({
    name: [''],
    recipe: [''],
    people_served: [''],
    country: [''],
    image:[null],
    ingredients: [''],
    })
   }

  ngOnInit(): void {
  }

  submitForm(){
    let formData = new FormData();
    formData.append('name',this.form.get('name').value)
    formData.append('image',this.form.get('image').value)
    formData.append('recipe',this.form.get('recipe').value)
    formData.append('people_served',this.form.get('people_served').value)
    formData.append('country',this.form.get('country').value)
    formData.append('ingredients',this.form.get('ingredients').value)

    this.recipeService.addRecipe(formData).subscribe(
      data=>{
        this.router.navigate(['/recipe', data.id])
      },error=>{
        console.log(error)
      }
    )

  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
    image: file
    });
    this.form.get('image').updateValueAndValidity()
    }
}
