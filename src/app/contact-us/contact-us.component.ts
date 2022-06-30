import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    title="";
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(ContactForm: NgForm)
  { 
    console.log(ContactForm);
    console.log(ContactForm.value.password)

  }
  
}
