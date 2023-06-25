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
      title: 'SportSpark',
      description: 'SportSpark is an application I built for my Master\'s degree thesis. The backend was built using ASP.NET Core, and the frontend using .NET MAUI.', 
      gitHubLink: 'https://github.com/AntunTkalcec/SportSpark',
      isOnPlayStore: false,
      imgLink: 'assets/images/SportSparkLogo_v2.png'
    },
    {
      title: 'BlogReader',
      description: 'BlogReader is a Xamarin.Forms app I built as part of a mobile development internship at Ekobit d.o.o',
      gitHubLink: 'https://github.com/AntunTkalcec/BlogReader',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png',
    },
    {
      title: 'This portfolio page!',
      description: 'I built this page using Angular, HTML and CSS (with some help from Bootstrap)',
      gitHubLink: 'https://github.com/AntunTkalcec/portfolio_v2',
      isOnPlayStore: false,
      imgLink: 'assets/images/noImage.png'
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
