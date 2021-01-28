import { Component, OnInit } from '@angular/core';
import { Employee} from '../../models/employee.model';
import { EmployeeServiceService} from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.fetchRecords();
  }

  fetchRecords() {
    this.employeeService.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      }
    )
  }

}
