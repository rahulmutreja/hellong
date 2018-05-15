import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { createEmployeeComponent } from './employee/createEmployee.component';

const appRoutes: Routes = [
    { path: 'emp/list', component: EmployeeComponent },
    { path: 'emp/create', component: createEmployeeComponent },
    { path: '', redirectTo: 'emp/list', pathMatch: 'full' }
];
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [AppComponent, EmployeeComponent, createEmployeeComponent],
    bootstrap: [AppComponent ]
})

export class AppModule { }
