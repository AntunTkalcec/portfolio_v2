import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    this.pageYoffset = window.pageYOffset;
  }
  projects = this.projectsService.getProjects();

  constructor(private projectsService: ProjectsService, private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}

