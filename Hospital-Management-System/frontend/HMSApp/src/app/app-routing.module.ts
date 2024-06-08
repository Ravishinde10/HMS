import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineStockComponent } from './medicine-stock/medicine-stock.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewMedicineComponent } from './view-medicine/view-medicineComponent';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { DocLoginComponent } from './doc-login/doc-login.component';
import { AddloginComponent } from './addlogin/addlogin.component';

const routes: Routes = [
{path:'admin', component:AdmindashComponent},

{path:'appointmentlist', component:AppointmentComponent},

{path:'medicinesockinfo', component:MedicineStockComponent},

{path:'createAppointment', component:CreateAppointmentComponent},

{path: 'createPatient', component:CreatePatientComponent},

{path: 'homepage', component:HomePageComponent},

{path:'',redirectTo:'homepage',pathMatch:'full'},

{path:'docdash', component:DocdashComponent},

{path:'addmedicine', component:CreateMedicineComponent},

{path:'updatepatient/:id', component:UpdatePatientComponent},

{path:'viewpatient/:id', component:ViewPatientComponent},

{path:'viewpatient', component:ViewPatientComponent},

{path:'viewmedicine/:id', component:ViewPatientComponent},

{path:'viewmedicine' ,component:ViewMedicineComponent},

{path:'updatemedicine/:id', component:MedicineUpdateComponent},

{path:'doclogin', component:DocLoginComponent},

{path:'addlogin', component:AddloginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
