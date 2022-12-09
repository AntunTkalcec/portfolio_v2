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
      title: 'WareHome',
      description: 'WareHome was a university Windows.Forms project that provided me with some experience in documenting a software product. Also, its where I became interested in object-oriented programming!',
      gitHubLink: 'https://github.com/foivz/pi21-atkalcec-khabdija-kstrucic',
      isOnPlayStore: false,
      imgLink: 'assets/images/warehome.png',
      imgClass: 'warehomeImg'
    },
    {
      title: '',
      description: '',
      gitHubLink: '',
      isOnPlayStore: false,
      imgLink: '',
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
