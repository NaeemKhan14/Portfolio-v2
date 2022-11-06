import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup | any;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', Validators.required]
    });

  }
  // Getter method to easily access form controls
  get form() { return this.contactForm.controls }

  submit() {
    this.isSubmitted = true;

    if (this.contactForm.invalid) {
      return
    }

  }

}
