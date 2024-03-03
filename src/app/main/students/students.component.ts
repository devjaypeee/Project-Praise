import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// Angular Material
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// Dialog Component
import { AddStudentComponent } from 'src/app/dialog/add-student/add-student.component';
import { SummaryComponent } from 'src/app/dialog/summary/summary.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentList: any = [];
  quizData: any = [];
 
  constructor(private data: DataService, public matDialog: MatDialog, private snackBar: MatSnackBar) {
    this.data.apiRequest('/getstud', {
      id: localStorage.getItem('userId'),
      token: localStorage.getItem('raw'),
      payload: {
        studid_fld: null,
      }
    }).subscribe((res: any) => {
      this.studentList = res.payload;
    })

    this.data.apiRequest('/getquiz', { 
      id: localStorage.getItem("userId"),
      token: localStorage.getItem("raw"),
      payload: {
        studid_fld: null,
      }
     })
    .subscribe((res: any) => {
        this.quizData = res.payload;
    })
  }

  ngOnInit(): void { }

  getNumber(id: any) {
    var num = this.quizData.filter((x: any) => x.studid_fld == id).length;
    var percent = this.quizData.length;

    return ((percent / 100) * num).toFixed(2);
  }

  addStudent() {
    const dialogRef = this.matDialog.open(AddStudentComponent, {
      width: '600px',
      // data: {
      //   envid: id
      // }
    });
  }

  getSummary(id: any, name: string) {
    const dialogRef = this.matDialog.open(SummaryComponent, {
      width: '700px',
      data: {
        studid: id,
        name: name
      }
    });
  }

  delete() { }

  edit() { }

}
