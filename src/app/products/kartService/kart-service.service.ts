import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KartServiceService {
  search = new BehaviorSubject("")
  constructor(private http:HttpClient) { }
  baseUrl:any="https://ekart-server-o9wp.onrender.com/products"

  // api to acess all products collection
  getAllProducts(){
    return this.http.get(`${this.baseUrl}`)
  }
  //single product
  getProduct(id:any){
    return this.http.get(`${this.baseUrl}/`+id)
  }
  //delete api
  removeProduct(id:any){
    return this.http.delete(`${this.baseUrl}/`+id)
  }
  addProduct(bodyData:any){
    return this.http.post(`${this.baseUrl}/`,bodyData)
  }
  updateProduct(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/`+id,bodyData)
  }

}
