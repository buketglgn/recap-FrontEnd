import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm: FormGroup;

  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:  ["", Validators.required]
    })
 }

 add(){
   if(this.colorAddForm.valid){
    let colorModel= Object.assign({},this.colorAddForm.value)
    
    this.colorService.add(colorModel).subscribe(response=>{
      this.toastrService.success(response.message,"başarılı")
    }  ,responseError=>{
      console.log(responseError.error)
    })
    
  }else{
    this.toastrService.error("Formunuz Eksik","Dikkat")
} 
}

}
