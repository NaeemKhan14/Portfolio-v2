import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { initFlowbite } from 'flowbite';

describe('ProjectsComponent', () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        initFlowbite();
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct number of projects', () => {
        expect(component.projects.length).toBe(3);
    });

    it('should navigate through carousel images', () => {
        const project = component.projects[0];
        component.openProjectDetails(project);
        fixture.detectChanges();

        // Test next button
        const nextButton = fixture.debugElement.query(By.css('[data-carousel-next]')).nativeElement;
        nextButton.click();
        fixture.detectChanges();
        expect(component.currentImageIndex).toBe(1);

        // Test previous button
        const prevButton = fixture.debugElement.query(By.css('[data-carousel-prev]')).nativeElement;
        prevButton.click();
        fixture.detectChanges();
        expect(component.currentImageIndex).toBe(0);
    });

    it('should display source code link if available', () => {
        const project = component.projects[1];
        component.openProjectDetails(project);
        fixture.detectChanges();

        const sourceCodeLink = fixture.debugElement.query(By.css('a')).nativeElement;
        expect(sourceCodeLink.href).toContain(project.link);
    });

    it('should display empty carousel images correctly', () => {
        // Simulating a new list where carouselImages are empty
        const emptyCarouselProjects = [
          {
            id: 1,
            title: 'Shift Schedule Helper',
            description: 'Android app for my work schedules',
            imageSrc: '../../../../assets/img/project_1.svg',
            details: "This is an Android application developed using Android Studio.",
            link: "https://github.com/NaeemKhan14/Shift-Schedules",
            carouselImages: []  // Empty carousel images
          },
          {
            id: 2,
            title: 'Athena',
            description: 'An ERP web application',
            imageSrc: '../../../../assets/img/project_2.svg',
            details: "Athena is an ERP system I developed for Archirodon Overseas.",
            link: "https://github.com/NaeemKhan14/Athena-BE",
            carouselImages: []  // Empty carousel images
          },
          {
            id: 3,
            title: 'MyAnimeList Helper',
            description: 'A REST API to sort my anime list',
            imageSrc: '../../../../assets/img/project_3.svg',
            details: "This is a Django project which is WIP.",
            link: "https://github.com/NaeemKhan14/MyAnimeList-Helper",
            carouselImages: []  // Empty carousel images
          }
        ];
    
        component.projects = emptyCarouselProjects;  // Assigning to the component's local variable
    
        fixture.detectChanges();
    
        // Add your assertions here, for example, checking if the carouselImages are empty
        component.projects.forEach(project => {
          expect(project.carouselImages.length).toBe(0);
        });
      });

    it('should open and close the modal when the Read More button and close button are clicked', async () => {
        const readMoreButton = fixture.debugElement.query(By.css('button[data-modal-target="project-modal"]'));
        expect(readMoreButton).toBeTruthy();

        // Find the modal and check if it's hidden initially
        const hiddenModal = fixture.debugElement.query(By.css(`#project-modal`)).nativeElement;
        expect(hiddenModal.classList).toContain('hidden');

        // Simulate clicking the "Read More" button to open the modal
        readMoreButton.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        // Find the modal and check if it's visible after clicking "Read More"
        const modal = fixture.debugElement.query(By.css(`#project-modal`)).nativeElement;
        expect(modal.classList).not.toContain('hidden');

        // Find and click the close button in the modal (adjust selector if necessary)
        const closeButton = fixture.debugElement.query(By.css('button[data-modal-hide="project-modal"]'));
        expect(closeButton).toBeTruthy();

        closeButton.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        // Check if the modal is hidden again after closing
        const closedModal = fixture.debugElement.query(By.css(`#project-modal`)).nativeElement;
        expect(closedModal.classList).toContain('hidden');
    });

});