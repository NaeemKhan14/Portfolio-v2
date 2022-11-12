import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';

describe('Layout Component', () => {
  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [
        LayoutComponent,
        FooterComponent,
        ContactFormComponent,
        ProjectsComponent,
        NavbarComponent,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should display navbar`, () => {
    fixture.detectChanges();
    const compiled =
      fixture.debugElement.nativeElement.querySelector('app-navbar');
    expect(compiled).toBeTruthy();
  });

  it(`should display projects`, () => {
    fixture.detectChanges();
    const compiled =
      fixture.debugElement.nativeElement.querySelector('app-projects');
    expect(compiled).toBeTruthy();
  });

  it(`should display contact form`, () => {
    fixture.detectChanges();
    const compiled =
      fixture.debugElement.nativeElement.querySelector('app-contact-form');
    expect(compiled).toBeTruthy();
  });

  it(`should display footer`, () => {
    fixture.detectChanges();
    const compiled =
      fixture.debugElement.nativeElement.querySelector('app-footer');
    expect(compiled).toBeTruthy();
  });
});
