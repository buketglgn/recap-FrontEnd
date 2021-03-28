import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


  constructor(public authService:AuthService,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService
    ) { }

    ngOnInit() {
      if(this.isAuthenticated()){
        this.authService.userDetailFromToken();  
      } 
    }
  
  isAuthenticated(){
  if(this.authService.isAuthenticated()){
    return true
  }
  else{
    return false
  }
 }

 logOut() {
  this.authService.logout();
}
 



}
