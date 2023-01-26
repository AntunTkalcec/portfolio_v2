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
      title: 'BlogReader',
      description: 'BlogReader is a Xamarin.Forms app I built as part of a mobile development internship at Ekobit d.o.o',
      gitHubLink: 'https://github.com/AntunTkalcec/BlogReader',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png',
    },
    {
      title: 'MauiBlazorDemo',
      description: '"MauiBlazorDemo" is a .NET MAUI app I built in order to familiarize myself with the brand new technology, as well as with Blazor, which I had not worked with before',
      gitHubLink: 'https://github.com/AntunTkalcec/MauiBlazorDemonstration',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png'
    },
    {
      title: 'This portfolio page!',
      description: 'I built this page using Angular, HTML and CSS (with some help from Bootstrap)',
      gitHubLink: 'https://github.com/AntunTkalcec/portfolio_v2',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png'
    },
    {
      title: 'Taxi-service simulation',
      description: 'This is a university project I worked on as part of a course on multiagent systems, built in Python',
      gitHubLink: 'https://github.com/AntunTkalcec/VASProjekt',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png'
    },
    {
      title: 'WareHome',
      description: 'WareHome was a university Windows.Forms project that provided me with some experience in documenting a software product. Also, its where I became interested in object-oriented programming!',
      gitHubLink: 'https://github.com/foivz/pi21-atkalcec-khabdija-kstrucic',
      isOnPlayStore: false,
      imgLink: 'assets/images/warehome.png',
      imgClass: 'warehomeImg'
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
