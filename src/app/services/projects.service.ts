import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      title: 'QUEEN DRINKS ALONE',
      description: 'Queen Drinks Alone is a mobile project I worked on during February of 2022. It was created using Xamarin.Forms, using best-practice patterns such as MVVM. The app is available on the Google Play Store!',
      gitHubLink: 'https://github.com/AntunTkalcec/Queen_Drinks_Alone',
      isOnPlayStore: true,
      imgLink: 'assets/images/QueenDrinksAloneIcon.png',
      playStoreLink: 'https://play.google.com/store/apps/details?id=atkalcec.Dama_Pije_Sama'
    },
    {
      title: 'Test',
      description: 'Test',
      gitHubLink: 'test',
      isOnPlayStore: false,
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
