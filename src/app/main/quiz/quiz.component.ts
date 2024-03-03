import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quiz } from 'src/app/interface/quiz.interface';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private data: DataService, private route: Router, private activeRoute: ActivatedRoute, private snackBar: MatSnackBar) { }
  
  quizId: any = this.activeRoute.snapshot.paramMap.get('id');
  qtyId: any = this.activeRoute.snapshot.paramMap.get('qty');
  moduleId: any = this.activeRoute.snapshot.paramMap.get('mod');
  lessonId: any = this.activeRoute.snapshot.paramMap.get('les');
  quizList = quiz;
  answerList: any = [];
  isSubmitted: boolean = false;

  // quiz score

  quizCounter: number = 2;
  halfScore: number = this.qtyId / 2;
  quizScore: any = '';

  ngOnInit(): void {
    
  }

  validateAnswer(choice: string, answer: string) {
    if (choice == answer) {
      return true;
    } else {
      return false
    }
  }

  onItemChange(id: number, letter: string, answer: string) {


    if (this.answerList.length == 0) {
      this.answerList.push({
        quizno: id,
        choice: letter,
        answer: answer,
        isCorrect: this.validateAnswer(letter, answer)
      });
    } else {
      var found = false;

      for(var i = 0; i < this.answerList.length; i++) {
        if (this.answerList[i].quizno == id) {
          this.answerList[i].choice = letter;
          this.answerList[i].isCorrect = this.validateAnswer(letter, answer);
          found = true;
        }
      }

      if(!found) {
        this.answerList.push({
          quizno: id,
          choice: letter,
          answer: answer,
          isCorrect: this.validateAnswer(letter, answer)
        });
      }
    }
  }

  submit() {
    this.quizScore = this.answerList.filter((res: any) => res.isCorrect === true).length

    if (this.quizScore > this.halfScore) {
      this.data.apiRequest('/submitquiz', { 
        id: localStorage.getItem("userId"),
        token: localStorage.getItem("raw"),
        payload: {
          studid_fld: localStorage.getItem("userId"),
          quizno_fld: this.quizId,
          quizdata_fld: btoa(this.answerList),
          score_fld: this.answerList.filter((res: any) => res.isCorrect === true).length
        }
       })
      .subscribe((res: any) => {
        if (res.status.remarks == 'success') {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          setTimeout(() => {
            this.route.navigate(['main/modules/3']);
          }, 2000);
        } else if (res.status.remarks == 'auth') {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
        } else {
          this.snackBar.open(res.status.message, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
        } 
      })
    }

    

    // console.log(this.answerList.filter((res: any) => res.isCorrect === true).length)
  }

  reload() {
    window.location.reload();
  }

  backToMain() {
    this.route.navigate(['main/modules/'+this.moduleId+'/'+this.lessonId]);
  }
}
