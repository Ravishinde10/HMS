import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

 private baseurl = "http://localhost:8080/api/v1"

 getPatientList():Observable<Patient[]>{

  return this.httpClient.get<Patient[]>(` ${this.baseurl}/patient`)

 }

 getCreatePatient(patient:Patient):Observable<Patient>{

  return this.httpClient.post<Patient>(`${this.baseurl}/insert`,patient)
 }

 delete(id:number):Observable<Object>{

  return this.httpClient.delete(`${this.baseurl}/patient/${id}`);


 }

 
 getPatientById(id:number):Observable<Patient>{

  return this.httpClient.get<Patient>(`${this.baseurl}/patient/${id}`);
 }

 updatePatient(id:number, patient:Patient):Observable<object>{

  return this.httpClient.put(`${this.baseurl}/update/${id}`, patient);
 }

}
