import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

 
  constructor(private userLogin: UserServiceService, private toast: ToastrService, private route: Router){}
  ngOnInit(): void {
      
  }

  isLoggedIn (){
    return this.userLogin.getLoggedIn();
  }

  onLogout() {
    this.userLogin.setLoggedIn(false)
    this.toast.success('logout successful','Logout');
    this.route.navigate(['/login']);
  }

}
