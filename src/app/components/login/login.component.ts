import { Time } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    public authService:AuthService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        localStorage.setItem("token",response.data.token)
         this.toastrService.success("Giriş Başarılı")
         this.authService.onRefresh()
         this.router.navigateByUrl('/');
        // this.toastrService.info("anasayfaya yönlendiriliyorsunuz..")
         
        // this.router.navigate(["cars"])
        
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error);
        
      })
    }
  }

}
