import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private scrollService: ScrollService, private router: Router) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollToSection(sectionId);
  }

  goToCV() {
    this.router.navigate(["cv"]);
  }
}
