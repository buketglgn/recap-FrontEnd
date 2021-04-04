import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarDetailByIdService } from 'src/app/services/carDetailById.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  carUpdateForm: FormGroup;
  brands:Brand[];
  colors:Color[];
  color:Color;
  brand:Brand;
  carDetails:Car;
  
  constructor( private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private carDetailByIdService:CarDetailByIdService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
       this.getCarsById(params["id"])
       
      
}
    this.createUpdateCarForm();
    
    
    this.getBrands();
    this.getColors();
    
  })
  
}
 update(){
    
    if(this.carUpdateForm.valid){
     let carModel= Object.assign({},this.carUpdateForm.value)    
     this.carService.update(carModel).subscribe(response=>{
       this.toastrService.success(response.message,"başarılı")
     }  ,responseError=>{
       console.log(responseError.error)
     })
     
   }else{
     this.toastrService.error("Formunuz Eksik","Dikkat")
 } 
 }
 createUpdateCarForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:  ["", Validators.required],
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
getCarsById(id:number){
  this.carDetailByIdService.getCarDetailById(id).subscribe(response=>{
    this.carDetails=response.data[0];
   
  })
}
varsayilan(){
this.carUpdateForm.patchValue({
  id:this.carDetails.id,
  brandId: this.carDetails.brandId,
  colorId: this.carDetails.colorId,
  modelYear:this.carDetails.modelYear,
  dailyPrice:this.carDetails.dailyPrice,
  description:this.carDetails.description

});}
}
