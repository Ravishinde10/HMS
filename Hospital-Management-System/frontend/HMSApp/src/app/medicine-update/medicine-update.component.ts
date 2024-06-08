import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css']
})
export class MedicineUpdateComponent {

  id:number=0;

  constructor(private medicineService:MedicineService,private route:ActivatedRoute, private router:Router){}

    medicine:Medicine = new Medicine();
    

    ngOnInit():void{

      this.id=this.route.snapshot.params['id'];
      this.medicineService.getMedicineStocById(this.id).subscribe(data=>{
        this.medicine=data;
      })
    }
    

  onSubmit(){

    this.medicineService.updateMedicineStock(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicalList();
    })
  }

  goToMedicalList(){

    this.router.navigate(['medicinesockinfo']);
  }

}
