import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { httpService } from '../services/http.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  form: FormGroup;
  upiID = '6646541521@upi'

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor(private fb: FormBuilder, private http:httpService,private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]+$')]],
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
      let APIparams = {
        apiKey: 'AppSettings.APIsNameArray.EXTRA.CONFIG,',
        uri: 'uri',
      };

      // let APIparams = {
      //   apiKey: 'franchise',
      //   uri: '',
      //   postBody:this.form.value
      // };
      
      this.http.post(APIparams).subscribe((ServerRes) => {
        if (ServerRes.success === true) {
        this.openSnackBar("Form Submitted Successfully")
          // this.sharedService.setConfig(ServerRes.response);
          // this.commonService.configData.next(ServerRes.response);
        }
      },(error)=>{
        this.openSnackBar("Form Not Submitted Successfully")
      });
    } else {
      console.error('Form is invalid');
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('UPI ID copied to clipboard!');
      })
      .catch((err) => {
        console.error('Error copying UPI ID:', err);
        alert('Failed to copy UPI ID.');
      });
  }


  openSnackBar(result:string) {
    this._snackBar.open(result, 'ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.form.reset()
  }
}
