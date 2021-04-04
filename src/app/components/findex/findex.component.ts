import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Findex } from 'src/app/models/findex';
import { AuthService } from 'src/app/services/auth.service';
import { FindexService } from 'src/app/services/findex.service';

@Component({
  selector: 'app-findex',
  templateUrl: './findex.component.html',
  styleUrls: ['./findex.component.css']
})
export class FindexComponent implements OnInit {

  findexScore:Findex[]=[]
  constructor(public authService:AuthService,
    private findexService:FindexService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getFindexScoreByUserId(this.authService.userId)
   
  }

  getFindexScoreByUserId(userId:number){
    console.log(userId)
    this.findexService.getFindexScoreByUserId(userId).subscribe(response=>{
      console.log(response)
      this.findexScore=response.data 
        })
        
       }
}
