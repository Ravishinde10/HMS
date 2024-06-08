import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {


   appointment:Appointment= new Appointment();

   constructor(private appointmentseervice:AppointmentService, private router:Router){}

   isSubmitted = false;
 

  
   saveAppointment(){

    this.appointmentseervice.createAppointment(this.appointment).subscribe(data=>{

      console.log(data);

      this.isSubmitted = true; // Set the flag to true upon successful submission
      setTimeout(() => this.goToAppointment(), 2000); // Navigate after a delay

      
     
    },
    error => console.error(error) // Handle error here if needed

  )
   }

  onSubmit(){

    if (this.appointment.name && this.appointment.symtomps && this.appointment.number) {
      this.saveAppointment();
    } else {
      alert("Please fill out all fields");
    }

  }

goToAppointment(){

  this.router.navigate(['/appointmentlist'])
}

}
