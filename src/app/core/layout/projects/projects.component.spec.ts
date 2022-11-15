import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectsComponent } from "./projects.component";

describe(`Projects Component`, () => {
    let fixture: ComponentFixture<ProjectsComponent>;
    let component: ProjectsComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(ProjectsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    });

    it(`should create component`, () => {
        expect(component).toBeTruthy();
    });
});