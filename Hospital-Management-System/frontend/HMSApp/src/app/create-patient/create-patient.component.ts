import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patient:Patient = new Patient();

  constructor(private patientService:PatientService, private router:Router){}

  isSubmitted=false;

  savePatient(){

    this.patientService.getCreatePatient(this.patient).subscribe(data=>{

      console.log(data);

      this.isSubmitted = true; // Set the flag to true upon successful submission
      setTimeout(() => this.goToAppointment(), 2000); // Navigate after a delay

    })
  }




  onSubmit(){

    this.savePatient();

  }

  goToAppointment(){

    this.router.navigate(['/admin'])
  }
  


}
