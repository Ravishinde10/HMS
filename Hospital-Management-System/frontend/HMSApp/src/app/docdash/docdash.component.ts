import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {

  constructor(private patientService:PatientService ,private router:Router){}

  patients:Patient[]=[];

  ngOnInit(){

    this.getAllPatient();

  }

  getAllPatient(){


    this.patientService.getPatientList().subscribe(data=>{

      this.patients=data;

    })

  }

  update(id:number){


    this.router.navigate(['updatepatient', id])

  }

  delete(id:number){

    this.patientService.delete(id).subscribe(data=>{

      console.log(data);

      this.getAllPatient();
    })
  }

  view(id:number){

    this.router.navigate(['viewpatient',id])
  }

}
