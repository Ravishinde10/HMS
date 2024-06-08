import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  
   appointments:Appointment[]=[];

  constructor(private appointmentservice:AppointmentService){}

ngOnInit():void{


  this.getAppointment();
}

getAppointment(){

  this.appointmentservice.getAllAppointment().subscribe(data=>{

    this.appointments = data;
  })
}

delete(id:number){

  this.appointmentservice.deleteAppointment(id).subscribe(data=>{
    console.log(data);
    this.getAppointment();
  })


}

}
