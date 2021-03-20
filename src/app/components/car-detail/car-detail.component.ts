import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarDetailByIdService } from 'src/app/services/carDetailById.service';


import { CarImagesByIdService } from 'src/app/services/carImagesById.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:Car;
  carImages:CarImage[]=[];
  rentalsByCarId:Rental[];
  rentals:Rental[];
  
  constructor(
    private carDetailByIdService:CarDetailByIdService,
    private carImagesByIdService:CarImagesByIdService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService,
    
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsById(params["id"])
        this.getImagesById(params["id"])
        // this.getRentalsByCarId(params["id"])
        
      }
      this.getRentals()
  })
}

  getCarsById(id:number){
    this.carDetailByIdService.getCarDetailById(id).subscribe(response=>{
      this.carDetails=response.data[0];
    })
  }
  getImagesById(id:number){
    this.carImagesByIdService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }
  getRentals(){
    this.rentalService.getrentals().subscribe(response=>{
      this.rentals=response.data;
    })
  }

  getRentalsByCarId(id:number){
    this.rentalService.getRentalsByCarId(id).subscribe(response=>{
      this.rentalsByCarId=response.data;
    })
  }
 
  check(id:number){
   this.rentals.find(function(element){
     if(element.carId===id && element.returnDate===null){
       return false //arac kiralanamaz
     }
     else{
       return true //kiralanabilir
     }

   })
  }

}
