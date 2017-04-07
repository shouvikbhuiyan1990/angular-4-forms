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

  forbiddenNames = ['singha','deb'];

  constructor() { }

  ngOnInit() {
    this.signUpForm =  new FormGroup({
      'userdata' : new FormGroup({
        'username' : new FormControl(null,[Validators.required,this.checkForbiddenNames.bind(this)]),
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

  checkForbiddenNames( control : FormControl ) : { [ s: string] : boolean  } {
    if (this.forbiddenNames.indexOf( control.value ) !== -1){
      return { namesIsForbidden : true }
    }
    return null;
  }

}
