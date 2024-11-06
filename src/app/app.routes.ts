import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppComponent } from './app.component';
import { StudentTableDetailsComponent } from './student-table-details/student-table-details.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'studentdetails',component:StudentTableDetailsComponent},
    {path:'student',component:StudentDetailsComponent},
];


