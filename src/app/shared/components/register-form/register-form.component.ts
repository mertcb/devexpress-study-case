import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { AuthService, AppInfoService } from '../../services';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  // register credentials
  email = '';
  password = '';
  name = '';
  surname = '';
  phone = '';

  constructor(public router: Router, public appInfo: AppInfoService, public authService: AuthService) { }

  ngOnInit() {
  }

  register(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }

    this.authService.register(this.email, this.password, this.name, this.surname, this.phone);

    args.validationGroup.reset();
  }

  redirect(url: String) {
    this.router.navigate([url])
  }

}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule
  ],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent]
})
export class RegisterFormModule { }

