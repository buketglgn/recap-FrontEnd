import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarImagesByIdService } from 'src/app/services/carImagesById.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  filterText:string="";

  

  constructor(private carService:CarService,  private activatedRoute:ActivatedRoute,
   
    ) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["colorId"] && params["brandId"]){
      this.getCarByFilters(params["brandId"],params["colorId"]);
    }
     else if(params["brandId"]){
       this.getCarsByBrand(params["brandId"])
     }
     else if(params["colorId"]){
       this.getCarsByColor(params["colorId"])
     }
     else{
       this.getCars()
      
     }
   })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
 
 getCarByFilters(brandId:number, colorId:number){
   this.carService.getCarsByBrandIdandColorId(brandId,colorId).subscribe(response=>{
    this.cars = response.data
   })
 }
  
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
    })
  }

 
  
  

}
