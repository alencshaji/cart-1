import { Component, OnInit } from '@angular/core';
import { KartServiceService } from '../kartService/kart-service.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  id:any=""
  productData:any={}
  constructor(private ks:KartServiceService,private ar:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id = data.id
      console.log(this.id);
      
    })
    this.ks.getProduct(this.id).subscribe({
      next:(result:any)=>{
        this.productData=result
        console.log(this.productData);
        
      }
    })
    
  }
  delete(){
    this.ks.removeProduct(this.id).subscribe({
      next:(data:any)=>{
        alert("Successfully deleted")
        this.route.navigateByUrl("")
      }
    })
  }

}
