import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validator, Validators} from "@angular/forms"
import { BrandService } from 'src/app/services/brand.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:  ["", Validators.required]
    })
 }

 add(){
   if(this.brandAddForm.valid){
    let brandModel= Object.assign({},this.brandAddForm.value)
    
    this.brandService.add(brandModel).subscribe(response=>{
      this.toastrService.success(response.message,"başarılı")
    }  ,responseError=>{
      console.log(responseError.error)
    })
    
  }else{
    this.toastrService.error("Formunuz Eksik","Dikkat")
} 
}




}
