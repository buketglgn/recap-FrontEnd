import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  brands:Brand[];
  colors:Color[];
  carAddForm: FormGroup;
  constructor(
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
  }
  add(){
    if(this.carAddForm.valid){
     let carModel= Object.assign({},this.carAddForm.value)    
     this.carService.add(carModel).subscribe(response=>{
       this.toastrService.success(response.message,"başarılı")
     }  ,responseError=>{
       console.log(responseError.error)
     })
     
   }else{
     this.toastrService.error("Formunuz Eksik","Dikkat")
 } 
 }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      brandId:  ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
    })
 }

 getColors(){
  this.colorService.getColors().subscribe(response=>{
    this.colors=response.data;
  })
}
getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    
    this.brands=response.data;
  })
}



}
