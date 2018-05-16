import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    
    templateUrl: 'src/app/employee/createEmployee.component.html'
    
})
export class createEmployeeComponent {
    saveEmployee(employeeForm: NgForm): void {
        console.log(employeeForm);
    }
}