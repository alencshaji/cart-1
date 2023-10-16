import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { KartServiceService } from '../kartService/kart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  selectedCategory:any='';
    // Define constants for category values
    readonly CATEGORY_GAMING_PC = 'Gaming Pc';
    readonly CATEGORY_GAMES = 'Games';
    readonly CATEGORY_HEADSET = 'Headset';

  // Initialize addForm as a FormGroup
  addForm: FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pname: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    image: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w\u0080-\uFFFF.-]*)*(\?[^\s]*)?$/i)]],
    graphics: ['', [Validators.pattern('[a-zA-Z0-9\\s\\®\\™()\\-]+ ')]],
    memory: ['', [Validators.pattern('[a-zA-Z0-9\\s\\®\\™()\\-]+ ')]],
    hdrive: ['', [Validators.pattern('[a-zA-Z0-9\\s\\®\\™()\\-]+ ')]],
    category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    descrip: ['', [Validators.required]],
    warranty: ['', [Validators.pattern('[A-Za-z0-9 ]+')]],
    available: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  });

  constructor(private fb: FormBuilder, private ds: KartServiceService, private route: Router) { }

  addNewProduct() {
    const path = this.addForm.value;
    let productData = {
      id: path.id,
      pname: path.pname,
      category: path.category,
      descrip: path.descrip,
      price: path.price,
      image: path.image,
      graphics: path.graphics,
      memory: path.memory,
      hdrive: path.hdrive,
      warranty: path.warranty,
      available: path.available
    };

    if (this.addForm.valid) {
      this.ds.addProduct(productData).subscribe({
        next: (result: any) => {
          alert("New product added");
          this.addForm.reset();
        }
      });
    } else {
      alert("Please fill data!!");
    }
  }

  updateSelectedCategory() {
    const categoryValue = this.addForm.get('category')?.value;
    this.selectedCategory = categoryValue;
  }
  
  
}
