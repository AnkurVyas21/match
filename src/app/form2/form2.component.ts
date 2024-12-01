import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { httpService } from '../services/http.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http:httpService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      contact: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/), // Validates 10-digit mobile numbers
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      utr: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // let APIparams = {
      //   apiKey: 'AppSettings.APIsNameArray.EXTRA.CONFIG,',
      //   uri: 'uri',
      // };

      let APIparams = {
        apiKey: 'franchise',
        uri: '',
        postBody:this.form.value
      };

      this.http.post(APIparams).subscribe((ServerRes) => {
        if (ServerRes.success === true) {
          // this.sharedService.setConfig(ServerRes.response);
          // this.commonService.configData.next(ServerRes.response);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }



}
