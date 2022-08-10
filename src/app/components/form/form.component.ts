import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  result: string = "";

  constructor(private fb: FormBuilder, ) {
    this.form = this.fb.group({
      file: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  resume(){

  }

}
