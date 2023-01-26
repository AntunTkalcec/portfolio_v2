import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProjects() {
    this.router.navigate(['projects']);
  }

  goToCV() {
    this.router.navigate(['cv']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
