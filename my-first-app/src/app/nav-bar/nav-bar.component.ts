import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser:string;

  constructor(private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.loggedInUser =localStorage.getItem('token');
    return this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
    this.toastr.success("Successfully logged out");
  }
}
