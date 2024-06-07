import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserServiceService } from '../../../Services/userService.service';

import { ToastrService } from 'ngx-toastr';
import { User } from '../../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  isUserSubmitted:boolean;
  constructor(private fb:FormBuilder,private userService: UserServiceService,private toastr:ToastrService,private router:Router) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',[Validators.required,Validators.minLength(10)]]
    });
  }

  register(){
    debugger;
    console.log(this.registrationForm.value);
    this.isUserSubmitted=true;
    //const formdata=this.registrationForm.value
    if(this.registrationForm.valid){
      //this.user=Object.assign(this.user,this.registrationForm.value);
      //  this.addUser(formdata);
      this.userService.addUser(this.userData());
        this.toastr.success("User Registered Successfully");
        this.registrationForm.reset();
        this.isUserSubmitted=false;
      this.router.navigate(['/user/login'])
    }
   else{
    this.toastr.error("Unable to register");
   }
    
   
  }

  userData() : User{
    return this.user={
      userName:this.registrationForm.value.userName,
      email:this.registrationForm.value.email,
      password:this.registrationForm.value.password,
      mobile:this.registrationForm.value.mobile

    }
  }
  

    passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      
      if (!password || !confirmPassword) {
        return null; // return if control is null
      }
      
      return password.value === confirmPassword.value ? null : { passwordMismatch: true };
    };
  }
}

