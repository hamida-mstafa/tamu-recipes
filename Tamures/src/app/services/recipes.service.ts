import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
import {Recipe } from '../models/recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) { }

  getRecipes(){
    return  this.http.get(`${environment.API_URL}/api/recipes/`)
     .pipe(
       map((data:Recipe[])=>{
         data.forEach((recipe)=>{recipe.image=environment.CLOUDINARY+recipe.image})
         return data
       }),
       catchError(err=>{
         return throwError('an error occured')
       })
     )
   }



   getRecipe(id){
    return  this.http.get(`${environment.API_URL}/api/recipes/${id}/`)
     .pipe(
       map((data:Recipe)=>{
         data.image=environment.CLOUDINARY+data.image
         return data
       }),
       catchError(err=>{
         return throwError('an error occured')
       })
     )
   }



  addRecipe(formData){
    return  this.http.post(`${environment.API_URL}/api/recipes/`, formData)
     .pipe(
       map((data:Recipe)=>{
         data.image=environment.CLOUDINARY+data.image
         return data
       }),
       catchError(err=>{
         return throwError('an error occured')
       })
     )
   }
}