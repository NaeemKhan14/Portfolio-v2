import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navLinks: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.navLinks = [
            { name: 'Home', url: '#' },
            { name: 'About', url: '#' },
            { name: 'Experience', url: '#' },
            { name: 'Projects', url: '#' },
            { name: 'Contact', url: '#' },
        ]
    }

}
