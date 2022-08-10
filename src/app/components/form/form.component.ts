import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NlpService } from 'src/app/services/nlp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  result: string = "";
  fileprev: any;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private _service: NlpService) {
    this.form = this.fb.group({
      file: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  resume(){
    this._service.sendText(this.fileprev);
  }

  showPreview(event : any){
    const fileLoad = event.target.files[0];
    this.extraerBase64(fileLoad).then((file: any) =>{
      this.fileprev = file.base;
      console.log(this.fileprev)
    })

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    let base : any;
    try {
      const unsafeFile = window.URL.createObjectURL($event);
      const file = this.sanitizer.bypassSecurityTrustUrl(unsafeFile);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return base;
    }
  })

}
