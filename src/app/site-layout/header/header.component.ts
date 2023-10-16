import { Component } from '@angular/core';
import { KartServiceService } from 'src/app/products/kartService/kart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchData: string = '';

  constructor(private ds: KartServiceService) {}

  accessData(event: any) {
    this.searchData = event.target.value;
    console.log('Search Data (accessData):', this.searchData); // Add this line
    this.ds.search.next(this.searchData);
    console.log('Search Data (BehaviorSubject):', this.searchData); // Add this line
  }
  
}
