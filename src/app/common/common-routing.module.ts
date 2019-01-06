import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
    
    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            // {
            //     path: 'pricing',
            //     component: PricingComponent
            // },
            
          
            
        ]
    },
    // {
    //     path: 'company',
    //     loadChildren: './company/company.module#CompanyHeaderModule'
    // }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CommonHeaderRoutingModule { }

