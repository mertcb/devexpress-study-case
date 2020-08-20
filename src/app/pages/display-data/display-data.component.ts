import { Component, NgModule } from '@angular/core';
import 'devextreme/data/odata/store';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { DataService, Project } from 'src/app/shared/services';
import ArrayStore from 'devextreme/data/array_store'

@Component({
  templateUrl: 'display-data.component.html',
  providers: [DataService]
})

export class DisplayDataComponent {
  dataSource: ArrayStore;
  priority: any[];

  constructor(public dataService: DataService) {
    this.dataSource = new ArrayStore({
      key: "ID",
      data: dataService.getProjects()
    });
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }

  logEvent(eventName) {
    console.log(eventName);
  }

  addRow(project) {
    this.dataService.addProject(project);
  }

  updateRow(eventName) {
    console.log(eventName);
  }

  deleteRow(project) {
    this.dataService.deleteProject(project)
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule
  ],
  declarations: [DisplayDataComponent],
  exports: [DisplayDataComponent]
})
export class DisplayDataModule { }

