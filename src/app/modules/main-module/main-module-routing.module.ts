import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../../components/main-page/main-page.component';

const routes: Routes = [
  {path :'mainpage',component: MainPageComponent},
  {path :'',component: MainPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
