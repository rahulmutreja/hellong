import { Component } from '@angular/core';

@Component({
    
    templateUrl: 'src/app/employee/createEmployee.component.html'
    
})
export class createEmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showdetails: boolean = true
    called(): void {
        this.showdetails = !this.showdetails;
    }
}