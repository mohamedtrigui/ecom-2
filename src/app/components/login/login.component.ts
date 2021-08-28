import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup
  constructor(private fb : FormBuilder) {
    let formControls = {
      username : new FormControl('',[
       Validators.required,
       Validators.email
       
       
       ]),
      password: new FormControl('',[
       Validators.required,
       Validators.minLength(6)
       
       ]),
      

   }
  
   this.form = this.fb.group(formControls)   
  }
  get username() {return this.form.get('username') }
  get password() {return this.form.get('password') }
  ngOnInit(): void {
  }
  

  submit() {
   {
    let data = this.form.value;
   // console.log((this.form.get('username')?.value));
     if (((this.form.get('username'))?.value=="nadhem@gmail.com") && ((this.form.get('password'))?.value=="123456")){
      
     console.log(data)
     }
    }
  }
 

   

}
