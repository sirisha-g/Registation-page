import { Component, OnInit,inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA,MatDialogTitle,MatDialogContent,} from '@angular/material/dialog';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-student-table-details',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatDialogModule,
    MatDialogTitle,
    MatDialogContent,StudentDetailsComponent],
  templateUrl: './student-table-details.component.html',
  styleUrl: './student-table-details.component.css'
})
export class StudentTableDetailsComponent implements OnInit {
  constructor(private router:Router){

  }
  dialog = inject(MatDialog);
  displayedColumns: string[] = [ 'student', 'studentClass', 'studentSection','reason','startDate','status'];
  dataSource =[];
  ngOnInit(): void {
    this.dataSource = JSON.parse(localStorage.getItem('studentData') || '[]');
    console.log(this.dataSource)
  }
  AddNewLeave(){
  //   this.dialog.open(StudentDetailsComponent, {
  //     height:'60%',
  //     width:'90%',
  //     disableClose:false,
  //   });
  // }
  this.router.navigate(['/student'])
  }
  

}
