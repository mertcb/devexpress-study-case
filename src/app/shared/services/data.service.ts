import { Injectable } from '@angular/core';

export class Project {
  ID: number;
  projectName: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: number;
}

let projects: Project[] = [{
  "ID": 1,
  "projectName": "Emoda Yazılım Study Case",
  "startDate": "2020/08/14",
  "endDate": "2020/08/21",
  "status": "Completed",
  "priority": 4
}];


@Injectable()
export class DataService {
  getProjects() {
    return projects;
  }

  addProject(project: Project) {
    projects.push(project);
  }

  deleteProject(projectID: number) {
    projects = projects.filter(project => {
      return project.ID != projectID
    })
  }

  updateProject(editedProject: Project) {
    projects = projects.map((item) => {
      return item.ID === editedProject.ID ? editedProject : item
    })
  }

}