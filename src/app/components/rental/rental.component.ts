import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CarDetailByIdService } from 'src/app/services/carDetailById.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import {FormGroup, FormBuilder, FormControl, Validator, Validators} from "@angular/forms"

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  rentalsAdd:Rental;
  rentalsByCarId:Rental[]=[];
  cars:Car[];
  carDetails:Car;
  customers:Customer[];
  rentDate:Date;
  returnDate:Date;
  price:number;
  result:number;

  rentAddForm: FormGroup;

  constructor(private rentalService:RentalService, private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private carDetailByIdService:CarDetailByIdService,
    private customerService:CustomerService,
    private router:Router,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
       this.getCarsById(params["id"])
        
      }
         this.getRentals()
         this.getCars()
         this.createRentalAddForm()
         this.getCustomer()
    
  })}
  getCustomer(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
      
    })
  }
  getRentDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }
  getReturnDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0,10)
  }

  createRentalAddForm(){
    this.rentAddForm = this.formBuilder.group({
      carId:  ["", Validators.required],
      customerId: ["", Validators.required],
      rentDate:  ["", Validators.required],
      returnDate: ["", Validators.required]
    })
 }

 add(){
   this.rentAddForm.patchValue({
     carId: this.carDetails.id
   })
  console.log(this.rentAddForm.get("carId")?.value)
  if(this.rentAddForm.valid){
    let rentalModel= Object.assign({},this.rentAddForm.value)
    
    this.rentalService.add(rentalModel).subscribe(response=>{
      this.toastrService.success(response.message,"başarılı")
    }  ,responseError=>{
      // if(responseError.error.Errors.length>0){  //Errors dedigimiz validationError lar
      //   for (let i = 0; i < responseError.error.Errors.length; i++) {
      //     this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"dogrulama hatası")
      //   }
          
      // }
      console.log(responseError.error)
     })
    
  }else{
    this.toastrService.error("Formunuz Eksik","Dikkat")
}  
}
   getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
  getRentals(){
    this.rentalService.getrentals().subscribe(response=>{
      this.rentals=response.data;
    })
  }
  getCarsById(id:number){
    this.carDetailByIdService.getCarDetailById(id).subscribe(response=>{
      
      this.carDetails=response.data[0];
     
    })
  }

// calculatePrice(){
  //   if(this.rentDate && this.returnDate){
  //     let endDate = new Date(this.rentDate.toString())
  //     let startDate = new Date(this.returnDate.toString())
  //     let endDay = Number.parseInt(endDate.getDate().toString())
  //     let endMonth = Number.parseInt(endDate.getMonth().toString())
  //     let endYear = Number.parseInt(endDate.getFullYear().toString())
  //     let startDay = Number.parseInt(startDate.getDate().toString())
  //     let startMonth = Number.parseInt(startDate.getMonth().toString())
  //     let startYear = Number.parseInt(startDate.getFullYear().toString())
  //     this.result =  ((endDay - startDay) + ((endMonth - startMonth)*30) + ((endYear - startYear)*365) + 1) * this.carDetails.dailyPrice
  //   }
  //   return this.result;
  // }

  }


