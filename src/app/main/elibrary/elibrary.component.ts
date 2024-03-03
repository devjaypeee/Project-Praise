import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elibrary} from 'src/app/interface/elibrary.interface'


@Component({
  selector: 'app-elibrary',
  templateUrl: './elibrary.component.html',
  styleUrls: ['./elibrary.component.scss']
})
export class ElibraryComponent implements OnInit {
gridColumns = 3;

  constructor(private activeRoute: ActivatedRoute) { }

  bookId: any = this.activeRoute.snapshot.paramMap.get('id');
  bookList = elibrary;
  

  ngOnInit(): void {
  }

  

 }
