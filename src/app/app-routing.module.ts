import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import  { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'employees', pathMatch: 'full'
  },
  {
    path: 'employees', component: EmployeeListComponent
  },
  {
    path: 'employees/:id', component: EmployeeDetailsComponent
  },
  {
    path: 'create', component: EmployeeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
