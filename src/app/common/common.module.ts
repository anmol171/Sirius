import { NgModule } from '@angular/core';
import { CommonHeaderRoutingModule } from './common-routing.module';
import { CommonModule } from '@angular/common';

import { CommonComponent } from './common.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        CommonComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        // BrowserModule,
        CommonModule,
        CommonHeaderRoutingModule,
    ],
    providers: [
    ],
    bootstrap: []
})
export class CommonHeaderModule { }
