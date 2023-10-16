import { Component, OnInit } from '@angular/core';
import { KartServiceService } from '../kartService/kart-service.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allProducts: any[] = [];
  filteredProducts: any = [];
  searchString: any = ""

  constructor(private ks: KartServiceService) { }

  ngOnInit() {
    this.ks.getAllProducts().subscribe({
      next: (result: any) => {
        this.allProducts = result;
        // Initially, display all products when the page loads
        this.categoryProduct({ target: { value: 'All' } } as any);
      }
    });
    this.ks.search.subscribe((data: any) => {
      this.searchString = data
    })

  }

  categoryProduct(event: any) {
    const selectedCategory = (event.target as HTMLSelectElement)?.value;

    if (selectedCategory === 'All') {
      // Show all products when "All" is selected
      this.filteredProducts = this.allProducts;
    } else {
      // Filter products by category name
      this.filteredProducts = this.allProducts.filter((item: any) => item.category === selectedCategory);
    }
  }
}
