import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();
  sectionToScroll$ = this.scrollSubject.asObservable();

  public scrollToSection(sectionId: string) {
    this.scrollSubject.next(sectionId);
  }

  constructor() { }

}
