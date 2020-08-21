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
  statuses: any[];
  constructor(public dataService: DataService) {

    this.dataSource = new ArrayStore({
      key: "ID",
      data: JSON.parse(localStorage.getItem("projects"))
    });

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];

    this.statuses = [{
      "id": 1, "name": "Not Started"
    }, {
      "id": 2, "name": "In Progress"
    }, {
      "id": 3, "name": "Deferred"
    }, {
      "id": 4, "name": "Need Assistance"
    }, {
      "id": 5, "name": "Completed"
    }
    ];

  }

  logEvent(eventName: string) {
    console.log(eventName);
  }

  addRow(project: Project) {
    this.dataService.addProject(project);
  }

  updateRow(project: Project) {
    this.dataService.updateProject(project.ID, project);
  }

  deleteRow(project) {
    this.dataService.deleteProject(project.ID)
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

