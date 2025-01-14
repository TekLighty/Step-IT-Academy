import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InerComponent } from './iner/iner.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'modal', component:ModalComponent},
  {path:'iner/:fname/:lname', component:InerComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
