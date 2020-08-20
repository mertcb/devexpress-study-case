import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, InformationComponent, RegisterFormComponent } from './shared/components';
import { AuthGuardService, RegisterGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'projects',
    component: DisplayDataComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register-form',
    component: RegisterFormComponent,
    canActivate: [RegisterGuardService]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService, RegisterGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }
