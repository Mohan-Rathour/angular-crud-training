import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService} from '../../services/employee-service.service';
import { Employee } from  '../../models/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee =  new Employee();
  constructor(
    private employeeService: EmployeeServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => {
      console.log("Employee created successfully");
      this.router.navigate(['/employees']);

    })
  }

}
