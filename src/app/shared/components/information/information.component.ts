import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';



@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url: String) {
    this.router.navigate([url])
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule
  ],
  declarations: [InformationComponent],
  exports: [InformationComponent]
})
export class InformationModule { }

