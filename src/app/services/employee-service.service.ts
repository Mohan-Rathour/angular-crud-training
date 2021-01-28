import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClinet: HttpClient) { }
  private URL =  'http://localhost:8080/api';
  public getEmployeeList() {
    return this.httpClinet.get<Employee[]>(this.URL+'/employees');
    //return this.httpClinet.get(this.URL+'/employees');
  }

  public getEmployeeById(id) {
    return this.httpClinet.get<Employee[]>(this.URL+'/employees/'+id);
    //return this.httpClinet.get(this.URL+'/employees/'+id);
  }

  public createEmployee(employee) {
    return this.httpClinet.get<Employee>(this.URL+'/create', employee);
    //return this.httpClinet.get(this.URL+'/create', employee);
  }
}
