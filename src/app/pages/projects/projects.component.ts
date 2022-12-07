import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = this.projectsService.getProjects();

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
