import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineStockComponent } from './medicine-stock/medicine-stock.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { CreatePatientComponent } from './create-patient/create-patient.component';

import { HomePageComponent } from './home-page/home-page.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { DocLoginComponent } from './doc-login/doc-login.component';
import { AddloginComponent } from './addlogin/addlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    MedicineStockComponent,
    CreateAppointmentComponent,
    CreatePatientComponent,
    HomePageComponent,
    DocdashComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    MedicineUpdateComponent,
    DocLoginComponent,
    AddloginComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
