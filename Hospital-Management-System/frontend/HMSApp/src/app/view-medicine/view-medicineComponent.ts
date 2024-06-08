import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../medicine';


@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent {

  id: number = 0;

  medicine: Medicine = new Medicine();

  constructor(private medicineService: MedicineService, private route: ActivatedRoute) {}

    
   ngOnInit():void{

   this.id=this.route.snapshot.params['id'];
   this.medicineService.getMedicineStocById(this.id).subscribe(data=>{

    this.medicine=data;
   })
   }

   
 

  }

  
    

