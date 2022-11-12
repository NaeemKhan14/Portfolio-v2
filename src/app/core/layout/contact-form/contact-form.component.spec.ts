import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

describe(`Contact Form`, () => {
  let fixture: ComponentFixture<ContactFormComponent>;
  let component: ContactFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ContactFormComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });
  /*****************
   * Invalid Tests *
   *****************/
  it(`should have invalid error if name field submitted without value`, () => {
    const nameField = component.contactForm.get('name');
    
    // Test with null value
    nameField.setValue(null);
    fixture.detectChanges();

    expect(nameField.invalid).toBeTruthy();
    
    // Test as an empty string
    nameField.setValue('');
    fixture.detectChanges();

    expect(nameField.invalid).toBeTruthy();
  });

  it(`should have invalid error if email field submitted without value`, () => {
    const emailField = component.contactForm.get('email');
    
    // Test with null value
    emailField.setValue(null);
    fixture.detectChanges();

    expect(emailField.invalid).toBeTruthy();
    
    // Test as an empty string
    emailField.setValue('');
    fixture.detectChanges();

    expect(emailField.invalid).toBeTruthy();
  });

  it(`should have invalid error if email field value is not a valid email address`, () => {
    const emailField = component.contactForm.get('email');
    
    // Test value without top-level domain provided
    emailField.setValue('test@test');
    fixture.detectChanges();

    expect(emailField.invalid).toBeTruthy();
    
    // Test value with incorrect email format
    emailField.setValue('test@test.t');
    fixture.detectChanges();

    expect(emailField.invalid).toBeTruthy();
  });

  it(`should have invalid error if message field submitted without value`, () => {
    const messageField = component.contactForm.get('message');
    
    // Test with null value
    messageField.setValue(null);
    fixture.detectChanges();

    expect(messageField.invalid).toBeTruthy();
    
    // Test as an empty string
    messageField.setValue('');
    fixture.detectChanges();

    expect(messageField.invalid).toBeTruthy();
  });
  /****************
   * Valid Tests  *
   ****************/
  it(`should have valid name`, () => {
    const nameField = component.contactForm.get('name');
    
    nameField.setValue('Some random name');
    fixture.detectChanges();

    expect(component.form['name'].value).toBe('Some random name');

  });

  it(`should have valid email`, () => {
    const emailField = component.contactForm.get('email');
    
    emailField.setValue('test@test.com');
    fixture.detectChanges();

    expect(component.form['email'].value).toBe('test@test.com');

  });

  it(`should have valid message`, () => {
    const messageField = component.contactForm.get('message');
    
    messageField.setValue('This is a random message');
    fixture.detectChanges();

    expect(component.form['message'].value).toBe('This is a random message');
  });
  /*********************
   * Form Submissions  *
   *********************/
  it(`should have valid form submitted`, () => {
    component.contactForm.get('name').setValue('random name');
    component.contactForm.get('email').setValue('email@test.com');
    component.contactForm.get('message').setValue('This is a long message');
    fixture.detectChanges();

    expect(component.isSubmitted).toBeFalse();

    component.submit();
    fixture.detectChanges();

    expect(component.isSubmitted).toBeTrue();
    expect(component.contactForm.invalid).toBeFalse();

  });

  it(`should have invalid form submitted`, () => {
    component.contactForm.get('name').setValue('random name');
    component.contactForm.get('email').setValue('email@test'); // invalid email
    component.contactForm.get('message').setValue('This is a long message');
    fixture.detectChanges();

    expect(component.isSubmitted).toBeFalse();

    component.submit();
    fixture.detectChanges();

    expect(component.isSubmitted).toBeTrue();
    expect(component.contactForm.invalid).toBeTrue();

  });
});
