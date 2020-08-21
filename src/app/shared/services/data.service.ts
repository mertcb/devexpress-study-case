import { Injectable } from '@angular/core';

export class Project {
  ID: number;
  projectName: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: number;
}

/*
MOCK DATA

{
  "ID": 1,
  "projectName": "Emoda Yazılım Study Case",
  "startDate": "2020/08/14",
  "endDate": "2020/08/21",
  "status": "Completed",
  "priority": 4
}

*/

let projects: Project[] = [];


@Injectable()
export class DataService {
  getProjects() {
    projects = JSON.parse(window.localStorage.getItem("projects"))
    return projects;
  }

  addProject(project: Project) {
    projects = JSON.parse(window.localStorage.getItem("projects"))
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects))
  }

  deleteProject(projectID: number) {
    projects = JSON.parse(window.localStorage.getItem("projects"))
    projects = projects.filter((project) => {
      return project.ID != projectID;
    });
    localStorage.setItem("projects", JSON.stringify(projects))
  }

  updateProject(projectID: number, editedProject: Project) {
    projects = JSON.parse(window.localStorage.getItem("projects"))
    const mappedProjects = projects.map(project => {
      if (project.ID == projectID) {
        project = editedProject;
      }
      return project;
    });
    localStorage.setItem("projects", JSON.stringify(mappedProjects))
  }
}