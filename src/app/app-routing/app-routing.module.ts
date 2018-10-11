import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from '../core/auth/ui/login-form/login-form.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';
import { UsersModule } from '../features/users/users.module';
import { UsersComponent } from '../features/users/users.component';

const authRoutes: Routes = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [
        CommonModule,
        UsersModule,
        RouterModule.forRoot(authRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
