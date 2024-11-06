import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,NgIf,NgFor,CommonModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  logInForm!:FormGroup;
  hide:boolean=true;
  private globalService=inject(GlobalServiceService);
  onDestroy$=new Subject();
  constructor(private router:Router){
    this.logInForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    })

  }
  ngOnInit(){

  }
  logIn(){
    let form= this.logInForm.value;
    this.globalService.saveLoginDetails(form).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      console.log(res,res.body);
      if(res.status==201){
        localStorage.setItem('loginToken',res.body.access_token);
        console.log(localStorage.getItem('loginToken'));
        this.router.navigate(['/studentdetails'])
      }
    })

  }
}
