import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { AttendenceComponent } from './Pages/attendence/attendence.component';
import { AdvanceComponent } from './Pages/advance/advance.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { SalaryComponent } from './Pages/salary/salary.component';
import { EmpPipe } from './Shared/pipes/emp.pipe';
import { DirectiveDirective } from './Shared/directives/directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AttendenceComponent,
    AdvanceComponent,
    LeavesComponent,
    SalaryComponent,
    EmpPipe,
    DirectiveDirective
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
