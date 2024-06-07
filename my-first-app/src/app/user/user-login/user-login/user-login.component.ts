import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private authService:AuthService,private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      userName:['',[Validators.required]],
      password:['',Validators.required]
    })

    
  }


  login(){

    debugger;
    const token=this.authService.authUser(this.loginForm.value)
      if(token){
        this.toastr.success("Login Success");
        localStorage.setItem('token',this.loginForm.value.userName);
        this.router.navigate(['/rent-property']);
      }
      else{
        this.toastr.error("Abort Login");
      }

      
  }

}
