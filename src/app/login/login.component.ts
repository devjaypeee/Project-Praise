import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Form Module 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Angular MaterialModules  
import { MatSnackBar } from '@angular/material/snack-bar';

// Services
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  clicked = false;

  loginForm: FormGroup;

  constructor(private data: DataService, private auth: AuthService, private formBuilder: FormBuilder, private route: Router, private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      studentno: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }

  ngOnInit(): void {
    if (!this.auth.getToken()) {  
      this.route.navigate(['/login'])   
    } else if (this.auth.getToken()) {
      this.route.navigate(['/main/elibrary'])   
    }
  }

  login() {
    const data: Student = {
      studno_fld: this.loginForm.value.studentno,
      studpwd_fld: this.loginForm.value.password
    }

    this.data.apiRequest('/loginstud', data).subscribe(
      (res: any) => {
        if (res.status.remarks == 'success') {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          this.auth.authData(res.payload.id, res.payload.token)
          setTimeout(() => {
            this.route.navigate(['main/elibrary']);
          }, 2000);
        } else if (res.status.remarks == 'auth') {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          this.clicked = false;
        } else {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          this.clicked = false;
        } 
      }
    )
  }

}

interface Student {
  studno_fld: string;
  studpwd_fld: string;
}