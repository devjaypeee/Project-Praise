import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Form Module 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Angular MaterialModules  
import { MatSnackBar } from '@angular/material/snack-bar';

// Services
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private data: DataService, private formBuilder: FormBuilder, private route: Router, private snackBar: MatSnackBar) {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      middlename: new FormControl('', [Validators.maxLength(50)]),
      lastname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      username: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      passwordone: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      passwordtwo: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }

  ngOnInit(): void {
  }

  register() {
    const data: Student = {
      studno_fld: this.registerForm.value.username,
      studpwd_fld: this.registerForm.value.passwordtwo,
      studfname_fld: this.registerForm.value.firstname,
      studmname_fld: this.registerForm.value.middlename,
      studlname_fld: this.registerForm.value.lastname,
    }

    this.data.apiRequest('/addstud', {
      id: localStorage.getItem('userId'),
      token: localStorage.getItem('raw'),
      payload: data,
    }).subscribe(
      (res: any) => {
        if (res.status.remarks == 'success') {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          window.location.reload();
        } else {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
        }
    })
  }

}

interface Student {
  studno_fld: number;
  studpwd_fld: string;
  studfname_fld: string;
  studmname_fld: string;
  studlname_fld: string;
}