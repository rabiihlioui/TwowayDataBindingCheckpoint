import { Component, OnInit } from '@angular/core';

import { Person }    from '../person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', '../styles/shards-dashboads.css']
})
export class FormComponent implements OnInit {

  firstName: string
  lastName: string
  email: string
  degree: string
  occupation: string
  workingDomain: string

  photoPath = "../assets/images/developer.png"

  //progLang: string

  //progLangs = ['Java', 'C', 'C++', 'TypeScript'];

  pers = new Person(this.firstName,this.lastName,this.email,this.degree,this.occupation,this.workingDomain)

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(this.pers.firstName);
  }

}
