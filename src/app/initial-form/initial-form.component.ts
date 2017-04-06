import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  @ViewChild('f') formChild:NgForm;
  genders = [ "male", "female" ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log(form);
    this.formChild.form.reset();
  }
  suggestAName(){
    const suggestedname = "Test user name";

    //This method has to provide value for all the fields in the form

      // this.formChild.setValue({
      //   userdata : {
      //     username : suggestedname,
      //     email : ''
      //   },
      //   secret : '',
      //   gender:''
      // })

    //We can provide the value of only the requierd fields

    this.formChild.form.patchValue({
      userdata : {
        username : 'lolwa'
      }
    })
  }
}
