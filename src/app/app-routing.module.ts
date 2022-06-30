import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentComponent } from './department/department.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path:'aboutus',component:AboutComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'dept',component:DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
