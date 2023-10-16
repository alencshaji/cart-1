import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KartServiceService } from '../kartService/kart-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId:any="";
  productData:any={};
  selectedCategory:any='';
  // Define constants for category values
  readonly CATEGORY_GAMING_PC = 'Gaming Pc';
  readonly CATEGORY_GAMES = 'Games';
  readonly CATEGORY_HEADSET = 'Headset';

  constructor(private ar:ActivatedRoute,private db:KartServiceService,private route:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.productId=data["id"]
    })
    this.db.getProduct(this.productId).subscribe({
      next:(result)=>{
        this.productData=result
        console.log(this.productData);
        
      }
      
    })
    
  }
  update(){
    this.db.updateProduct(this.productId,this.productData).subscribe({
      next:(result:any)=>{
        alert("Data Updated")
        this.route.navigateByUrl("")

      }
    })

  }
  

}
