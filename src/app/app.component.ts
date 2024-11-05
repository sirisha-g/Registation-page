import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { GlobalServiceService } from './services/global-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,NgIf,NgFor,CommonModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  logInForm!:FormGroup;
  hide:boolean=true;
  private globalService=inject(GlobalServiceService);
  onDestroy$=new Subject();
  constructor(){
    this.logInForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    })

  }
  ngOnInit(){

  }
  logIn(){
    let form= this.logInForm.value;
    this.globalService.saveLoginDetails(form).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      console.log(res,res.body);
      localStorage.setItem(res.body.token,'loginToken')
    })

  }
  title = 'Registation-page';
}
