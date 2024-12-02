import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { httpService } from '../services/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form: FormGroup;
  roles=['Batsman','Bowler','All Rounder']
  handedness=['Right Handed','Left Handed']
  jtype=['Full Sleeves','Half Sleeves']
  j_size=['S','M','L','XL','XLL','XLLL']
  upiID = '6646541521@upi'

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor(private fb: FormBuilder, private http:httpService, private httpcli:HttpClient,private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]+$'),]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/),
        ],
      ],
      role: ['', Validators.required],
      batting_handedness: ['', Validators.required],
      bowling_handedness: ['', Validators.required],
      j_name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]+$')]],
      j_size: ['', Validators.required],
      j_number: ['', Validators.required,    ],
      j_type: ['', Validators.required],
      utr: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let APIparams = {
        apiKey: 'AppSettings.APIsNameArray.EXTRA.CONFIG,',
        uri: 'uri',
      };

  //     let APIparams = {
  //       apiKey: 'players',
  //       uri: '',
  //       postBody:this.form.value
  //     };

  //     this.httpcli
  // .post('http://localhost:3000/players', this.form.value /*,headers*/)
  // .pipe(map((res) => console.log(res)))
  // .subscribe();

      this.http.post(APIparams).subscribe((ServerRes) => {
        if (ServerRes.success === true) {
          this.openSnackBar("Form Submitted Successfully")
        }
      },(error)=>{
        this.openSnackBar("Form Not Submitted Successfully")
      });
    } else {
      console.error('Form is invalid');
    }
  }


  selectionChange()
  {    // Subscribe to changes in the 'j_number' field
    this.form.get('role')?.valueChanges.subscribe((value) => {
      this.form.get('bowling_handedness')?.enable();
      this.form.get('batting_handedness')?.enable();
      if(value=='Batsman')
      {
        this.form.get('bowling_handedness')?.disable();
        this.form.get('batting_handedness')?.clearValidators(); // Clears all validators
        this.form.get('batting_handedness')?.updateValueAndValidity();
      }
      else if(value=='Bowler') {
        this.form.get('batting_handedness')?.disable();
        this.form.get('bowling_handedness')?.clearValidators(); // Clears all validators
        this.form.get('bowling_handedness')?.updateValueAndValidity();
      }
      // Add custom logic here when the value changes
    });
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
