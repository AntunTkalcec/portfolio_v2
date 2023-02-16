import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
