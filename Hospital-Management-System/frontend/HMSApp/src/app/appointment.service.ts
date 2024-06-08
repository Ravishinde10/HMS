import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
  constructor(private httpClient:HttpClient){}

    private  baseurl= "http://localhost:8080/api/v2"

   
    getAllAppointment():Observable<Appointment[]>{

      return this.httpClient.get<Appointment[]>(`${this. baseurl}/get`);
    }

   createAppointment(appointment:Appointment):Observable<Appointment>{

    return this.httpClient.post<Appointment>(`${this.baseurl}/appointment`,appointment);
   }

   deleteAppointment(id:number):Observable<Object>{

    return this.httpClient.delete(`${this.baseurl}/deleteappointment/${id}`);
   }
  


}
