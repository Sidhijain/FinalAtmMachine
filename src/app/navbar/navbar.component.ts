import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  constructor(private router:Router){}
  ngOnInit(): void {
   
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logoutSubmit(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}