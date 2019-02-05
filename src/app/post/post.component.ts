import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: any;

  constructor(private http: HttpService, private auth: AuthService) {
  }

  comments = [];
  postUploaderUserName;
  caption;
  url;

  ngOnInit() {
    console.log(this.postData);
    this.postUploaderUserName = this.auth.getIdUserName(this.postData.userId);
    this.url = this.postData.fileName;
    this.caption = this.postData.context;
    this.http.getOnePostComments(this.postData.id).subscribe(z=>{
      console.log(z);
    })
  }

}
