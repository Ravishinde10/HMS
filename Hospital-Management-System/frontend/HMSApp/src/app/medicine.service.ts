import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseurl = "http://localhost:8080/api/v3" 

  getAllMedicineStoch():Observable<Medicine[]>{

    return this.httpClient.get<Medicine[]>(`${this.baseurl}/get`)
  }


  createMedicine(medicine:Medicine):Observable<Medicine>{

    return this.httpClient.post<Medicine>(`${this.baseurl}/insert`, medicine);
  }


  deleteMedicineStock(id:number):Observable<Object>{

    return this.httpClient.delete<Medicine>(`${this.baseurl}/delete/${id}` );

  }

  getMedicineStocById(id:number):Observable<Medicine>{

    return this.httpClient.get<Medicine>(`${this.baseurl}/medicine/${id}`)
  }

  updateMedicineStock(id:number, medicine:Medicine):Observable<Object>{

    return this.httpClient.put<Medicine>(`${this.baseurl}/update/${id}`, medicine);
  }
}
