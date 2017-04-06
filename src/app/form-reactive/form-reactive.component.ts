import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = [ "male", "female" ];
  signUpForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm =  new FormGroup({
      'userdata' : new FormGroup({
        'username' : new FormControl(null,Validators.required),
        'email' : new FormControl(null,[Validators.required, Validators.email])
      }),
      'gender' :  new FormControl("male"),
      'hobbies': new FormArray([])
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  onSubmit(){
    console.log( this.signUpForm );
  }

}
