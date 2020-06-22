import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateComponent } from './components/update/update.component';
// import { UpdateComponent } from './components/update/update.component';



const routes: Routes = [
  {path:'update',component:UpdateComponent},
  {path:'view',component:ViewComponent},
  {path:'profile',component:ProfileComponent},

  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents=[
  ViewComponent,
  ProfileComponent,
  UpdateComponent,

  ]
