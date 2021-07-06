import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'regis',component:RegisterComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'dash',component:DashComponent
  },
  {
    path:'view',component:ViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
