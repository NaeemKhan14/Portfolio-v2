import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Naeem Khan'`, () => {
    expect(component.title).toEqual('Naeem Khan');
  });

  it(`should check goto top button`, () => {
    expect(component.isVisible).withContext('false at first').toBeFalse();
    // Scroll down to offset required to trigger the condition and check again.
    Object.assign(window, { pageYOffset: 100 });
    component.checkScroll();
    expect(component.isVisible).toBe(true);
    
    // Scroll back to top and check again.
    component.gotoTop();
    
    Object.assign(window, { pageYOffset: 0 });
    component.checkScroll();
    expect(component.isVisible).toBe(false);
  });
});
