import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-stock',
  templateUrl: './medicine-stock.component.html',
  styleUrls: ['./medicine-stock.component.css']
})
export class MedicineStockComponent {

  mediciness:Medicine[]=[];



  medicines:Medicine = new Medicine();

  
  constructor(private medicineService:MedicineService, private router:Router) {}

  

  ngOnInit():void{

    this.getMedicineStock();
  }
 
  getMedicineStock(){

      this.medicineService.getAllMedicineStoch().subscribe(data=>{

        this.mediciness = data;
      })
  }

  deleteStock(id:number){

    this.medicineService.deleteMedicineStock(id).subscribe(data=>{
      console.log(data);

      this.getMedicineStock();
    })

  }


  updateStock(id:number){

    this.router.navigate(['updatemedicine', id])

  }

  viewStock(id:number){

    this.router.navigate(['viewmedicine'])

  }

 
  }
 
 

