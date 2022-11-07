import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navLinks = [
      { name: 'Home', url: 'home' },
      { name: 'About', url: 'about' },
      { name: 'Experience', url: 'experience' },
      { name: 'Projects', url: 'projects' },
      { name: 'Contact', url: 'contact' },
    ];
  }

  scroll(el: any) {
    document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
  }
}
