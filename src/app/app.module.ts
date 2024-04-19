import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { AttendenceComponent } from './Pages/attendence/attendence.component';
import { AdvanceComponent } from './Pages/advance/advance.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AttendenceComponent,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
