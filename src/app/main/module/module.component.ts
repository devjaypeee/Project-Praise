import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { lesson } from 'src/app/interface/lesson.interface';
import { quiz } from 'src/app/interface/quiz.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})

export class ModuleComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private data: DataService
  ) {}

  moduleId: any = this.activeRoute.snapshot.paramMap.get('les');
  lessonId: any = this.activeRoute.snapshot.paramMap.get('id');

  lesson = lesson;
  quiz = quiz;
  topic: any = [];
  quizData: any = [];

  ngOnInit(): void {
    // var data:any = this.sessionService.getSessionData();
    // this.token = this.sessionService.decodeData(data);

    // this.dataService.apiRequest('/getadmin', { "adminid_fld": this.token.uid })
    // .subscribe((res: any) => {
    //   this.adminData = res.payload[0];
    // })

    this.getLessonId(this.moduleId, this.lessonId)

    this.data.apiRequest('/getquiz', { 
      id: localStorage.getItem("userId"),
      token: localStorage.getItem("raw"),
      payload: {
        studid_fld: localStorage.getItem("userId")
      }
     })
    .subscribe((res: any) => {
        this.quizData = res.payload;
    })
  }

  getLessonId(code: any, id: number) {
    const datas: any = [];
    datas.push(this.lesson[code - 1].lessons[id - 1]);

    this.moduleId = code;
    this.lessonId = id;


    this.topic = datas;
  }

  takeQuiz(id: number, qty: number, module: number, lesson: number) {
    this.router.navigate(['/quiz/'+id+'/'+qty+'/'+module+'/'+lesson])   
  }

  checkQuizNumber(id: number) {
    return this.quizData.find((res: any) => res.quizno_fld == id);
  }

  getQuizScore(id: number) {
    var data = this.quizData.find((res: any) => res.quizno_fld == id);

    if (data) {
      return data.score_fld
    } else {
      return 0
    }
  }

  percentage(num: number, percent: number) {
    return ((percent / 100) * num).toFixed(2);
  }

}
