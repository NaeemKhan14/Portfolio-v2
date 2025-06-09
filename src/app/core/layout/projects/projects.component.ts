import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    standalone: false
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      id: 1,
      title: 'Shift Schedule Helper',
      description: 'Android app for my work schedules',
      imageSrc: '../../../../assets/img/project_1.svg',
      details: "This is an Android application developed using Android Studio. It is still a work in progress. So far the front end is completed, and I have started working on the backend part. The goal is to scan my work schedule from my part time job, and have the app automatically populate all the data using machine learning, and keep track of all the work hours, shifts, total hours worked in a week etc.",
      link: "https://github.com/NaeemKhan14/Shift-Schedules",
      carouselImages: [
        '../../../../assets/img/projects/shiftschedule/dashboard.png',
        '../../../../assets/img/projects/shiftschedule/shifts_1.png',
        '../../../../assets/img/projects/shiftschedule/shifts_2.png',
        '../../../../assets/img/projects/shiftschedule/stats.png',
        '../../../../assets/img/projects/shiftschedule/settings.png',
      ]
    },
    {
      id: 2,
      title: 'Athena',
      description: 'An ERP web application',
      imageSrc: '../../../../assets/img/project_2.svg',
      details: "Athena is an ERP system I developed for Archirodon Overseas while working for them as a Full-Stack Developer. It is designed using Django Rest Framework as the back-end API server, Angular 14 as the front-end, and PostgreSQL as the main database.",
      link: "https://github.com/NaeemKhan14/Athena-BE",
      carouselImages: [
        '../../../../assets/img/projects/athena/1.1.png',
        '../../../../assets/img/projects/athena/1.2.png',
        '../../../../assets/img/projects/athena/2.1.png',
        '../../../../assets/img/projects/athena/2.2.png',
        '../../../../assets/img/projects/athena/3.1.png',
        '../../../../assets/img/projects/athena/3.2.png',
      ]
    },
    {
      id: 3,
      title: 'MyAnimeList Helper',
      description: 'A REST API to sort my anime list',
      imageSrc: '../../../../assets/img/project_3.svg',
      details: "This is a Django project which is WIP. So far I have implemented the OAuth2.0 from MyAnimeList.net's API, and through that a user token is generated for persistent login. The goal of this web app is to automatically sort the scores in my list since manually doing them is not feasible (as I have hundreds of entries in my list). Also it is to provide me with updates and recommendations based on my preferences. I am creating this app with reusability in mind, so any user can use it; not just me.",
      link: "https://github.com/NaeemKhan14/MAL_Tools",
      carouselImages: []
    }
  ];

  selectedProject: any = null;
  currentImageIndex: number = 0;
  selectedImage: string | null = null;

  openProjectDetails(project: any) {
    this.selectedProject = project;
  }

  // Method to handle image click
  openImageModal(image: string) {
    this.selectedImage = image;
  }

  closeImageModal() {
    this.selectedImage = null;
  }

}
