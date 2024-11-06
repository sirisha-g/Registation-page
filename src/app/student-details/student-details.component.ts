import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatOptionModule,
  MatRadioModule,MatDatepickerModule,NgFor,NgIf,CommonModule,MatDialogContent,MatDialogActions,MatDialogClose,MatDialogTitle
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  studentDetailsForm:FormGroup;
  classes=[];
  section=[];
  studentNames=[];
  studentDetailsData=[];
  constructor(private router:Router){
    this.studentDetailsForm=new FormGroup({
      studentClass:new FormControl(null,Validators.required),
      studentSection:new FormControl(null,Validators.required),
      student:new FormControl(null,Validators.required),
      reason:new FormControl(null,Validators.required),
      numberOfDays:new FormControl('single',Validators.required),
      startDate:new FormControl(new Date(),Validators.required),
      endDate:new FormControl(new Date(),Validators.required),
      status:new FormControl('approved',Validators.required)
    })
  }
  ngOnInit(): void {
    this.getDiagnosisData();
    this.getSections();
    this.getStudentNames();

    
  }
  getDiagnosisData():void{
    this.classes=[
      {id:1,value:'I',mnemonic:'cc'},
      {id:2,value:'II',mnemonic:'sc'},
      {id:3,value:'III',mnemonic:'lk'},
      {id:4,value:'IV',mnemonic:'lp'},
      {id:5,value:'V',mnemonic:'mn'},
      {id:6,value:'VI',mnemonic:'lk'},
      {id:7,value:'VII',mnemonic:'lp'},
      {id:8,value:'VIII',mnemonic:'mn'},
      {id:9,value:'IX',mnemonic:'lp'},
      {id:8,value:'X',mnemonic:'mn'},
    ]
  }
getSections() :void{
this.section=[
      {id:1,value:'A',mnemonic:'A'},
      {id:2,value:'B',mnemonic:'B'},
      {id:3,value:'C',mnemonic:'C'},
      {id:4,value:'D',mnemonic:'D'},
]

}
getStudentNames():void{
this.studentNames=[
      {id:1,value:'sirisha',mnemonic:'s'},
      {id:2,value:'Madhan',mnemonic:'M'},
      {id:3,value:'Rohan',mnemonic:'R'},
      {id:4,value:'Sitha',mnemonic:'S'},
      {id:5,value:'srihan',mnemonic:'SH'},
      {id:6,value:'Puneeth',mnemonic:'P'},
      {id:7,value:'Roshan',mnemonic:'R'},
      {id:8,value:'amar',mnemonic:'A'},

]

}
clearData(){
  this.studentDetailsForm.reset();
}
SaveStudentDetails(){
  let form=this.studentDetailsForm.value;
  this.studentDetailsData.push(form);
  localStorage.setItem('studentData',JSON.stringify(this.studentDetailsData));
  console.log(this.studentDetailsData)
  this.router.navigate(['/studentdetails'])
}


}
