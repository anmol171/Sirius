import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './common/common.module#CommonHeaderModule'
  },
  {
    path: '**',
    redirectTo: 'login'  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
