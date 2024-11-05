import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  logInForm!:FormGroup;
  constructor(){
    this.logInForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email])
    })

  }
  ngOnInit(){

  }
  title = 'Registation-page';
}
