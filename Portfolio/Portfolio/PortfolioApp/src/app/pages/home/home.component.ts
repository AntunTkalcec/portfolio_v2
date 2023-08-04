import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  private scrollSubscription!: Subscription;
  projects = this.projectsService.getProjects();

  sections!: NodeListOf<HTMLElement>;
  navLinks!: NodeListOf<HTMLAnchorElement>;
  menuIcon!: HTMLElement | null;
  navbar!: HTMLElement | null;
  hiddenElements!: NodeListOf<HTMLElement>;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    });
  });

  constructor(private projectsService: ProjectsService, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.sectionToScroll$.subscribe((sectionId) => {
      this.scrollIntoView(sectionId);
    });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  private scrollIntoView(sectionId: string) {
    if (sectionId === "homeSection" && this.homeSection) {
      this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    else if (sectionId === "aboutSection" && this.aboutSection) {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    else if (sectionId === "projectsSection" && this.projectsSection) {
      this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    else if (sectionId === "contactSection" && this.contactSection) {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.sections = document.querySelectorAll('section');
    this.navLinks = document.querySelectorAll('header nav a');
    this.menuIcon = document.querySelector('#menu-icon');
    this.navbar = document.querySelector('.navbar');
    this.hiddenElements = document.querySelectorAll('.hidden');
    this.hiddenElements.forEach((el) => this.observer.observe(el));

    if (this.menuIcon != null) {
      this.menuIcon.onclick = () => {
        this.menuIcon?.classList.toggle('rotate');
        this.navbar?.classList.toggle('active');
      };
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        this.navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[id*=' + id + ']')?.classList.add('active');
        });
      }
    });
    let header = document.querySelector('header');
    header?.classList.toggle('sticky', window.scrollY > 100);

    this.menuIcon?.classList.remove('rotate');
    this.navbar?.classList.remove('active');
  }
}
