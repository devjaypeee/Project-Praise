import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { quiz } from 'src/app/interface/quiz.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  quizData: any = [];
  quizList = quiz;

  constructor(private data: DataService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public fetch: any, private snackBar: MatSnackBar) { }
  

  ngOnInit(): void {
    this.data.apiRequest('/getquiz', { 
      id: localStorage.getItem("userId"),
      token: localStorage.getItem("raw"),
      payload: {
        studid_fld: this.fetch.studid,
      }
     })
    .subscribe((res: any) => {
      this.quizData = res.payload;
    })
  }

  retakeQuiz(quizid: any) {
    this.data.apiRequest('/delquiz', { 
      id: localStorage.getItem("userId"),
      token: localStorage.getItem("raw"),
      payload: {
        quizid_fld: quizid,
      }
     })
    .subscribe((res: any) => {
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

  getModuleName(id: any) {
    return this.quizList.find((x: any) => x.id === id)?.moduleName;
  }

  getQuizDiff(id: any) {
    return this.quizList.find((x: any) => x.id === id)?.difficulty;
  }

  getQuizNum(id: any) {
    return this.quizList.find((x: any) => x.id === id)?.quizno;
  }

  getQuizLength(id: any) {
    return this.quizList.find((x: any) => x.id === id)?.questions.length;
  }

}
