import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: any;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    console.log(this.postData);
  }

}
