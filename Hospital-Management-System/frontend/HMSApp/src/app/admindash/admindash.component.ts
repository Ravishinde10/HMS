import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {

 patient:Patient[]=[];

  patients:Patient=new Patient();

 constructor(private patientService:PatientService){}

 ngOnInit():void{
  this.getPatient();
 }

 getPatient(){

this.patientService.getPatientList().subscribe(data=>{
  
 this.patient=data;

  })
  
  

 }

 createPatient(){

  this.patientService.getCreatePatient(this.patients).subscribe(data=>{

    console.log(data);
  })
 }

 delete(id:number){

  this.patientService.delete(id).subscribe(data=>{
    console.log(data);

    this.getPatient();
  })
 }

}
