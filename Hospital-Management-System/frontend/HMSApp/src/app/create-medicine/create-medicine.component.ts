import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {

  constructor(private medicineService:MedicineService, private router:Router){}

  isSubmitted:boolean=false;

  medicines:Medicine[]=[];

  medicine:Medicine = new Medicine();

  ngOnInit(){


   

  }

  

  AddMedicine(){

   this.medicineService.createMedicine(this.medicine).subscribe(data=>{

    console.log(data);

    
    this.isSubmitted = true; // Set the flag to true upon successful submission
    setTimeout(() => this.goToMedicineStock(), 2000); // Navigate after a delay

    
   
  },
  error => console.error(error) // Handle error here if needed

)
 }

  onSubmit(){

    this.AddMedicine();
  }

  
goToMedicineStock(){

  this.router.navigate(['/medicinesockinfo'])
}


  

}
