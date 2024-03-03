import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

// Services
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userData: any = [];

  // gcmarket: string = 'assets/logo.png';

  constructor(
    private activeRoute: ActivatedRoute, private router: Router, private data: DataService, private auth: AuthService) { }
    
  moduleId: any = this.activeRoute.snapshot.paramMap.get('mod');
  lessonId: any = this.activeRoute.snapshot.paramMap.get('les');

  ngOnInit(): void {
    this.data.apiRequest('/getstud', {
      id: localStorage.getItem('userId'),
      token: localStorage.getItem('raw'),
      payload: {
        studid_fld: localStorage.getItem('userId')
      }
    }).subscribe((res: any) => {
      this.userData = res.payload[0];
    })

    this.moduleId = 1;
    this.lessonId = 1;

    console.log(`Module ${this.moduleId} Lesson ${this.lessonId}`)

  }
  
  logout() {
    this.data.apiRequest('/logoutstud', { studid_fld: localStorage.getItem('userId') })
    .subscribe((res: any) => {
      if (res.status.remarks == 'success') {
        localStorage.clear();
        this.router.navigate(['/login'])    
      }
    })
  }
}
