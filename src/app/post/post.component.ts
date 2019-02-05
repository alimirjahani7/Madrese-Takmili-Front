import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {AuthService} from '../auth.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: any;

  constructor(private http: HttpService, private auth: AuthService, private formBuilder: FormBuilder) {
  }


  commentForm: FormGroup;
  likeForm: FormGroup;

  comments = [];
  postUploaderUserName;
  caption;
  url;
  likeOrUnLike = 'Like';
  commentOfServer: any[];

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.required],
    });
    this.likeForm = this.formBuilder.group({});
    this.postUploaderUserName = this.auth.getIdUserName(this.postData.userId);
    this.url = this.postData.fileName;
    this.caption = this.postData.context;
    this.http.getOnePostComments(this.postData.id).subscribe(z => {
      this.commentOfServer = z;
      z = this.commentOfServer;
      z.forEach(x => {
        this.comments.push({user: this.auth.getIdUserName(x.userId), comment: x.message});
      });

    });
    this.http.getOnePostLikes(this.postData.id).subscribe(z => {
      console.log(z);
    });
  }

  hitLike() {
    this.http.postLike({UserId: this.auth.UserId, PostId: this.postData.id}).subscribe(x => {
      this.auth.updatePosts();
    })
  }

  addComment() {
    const comment = this.commentForm.controls['commentText'].value;
    this.http.sendComment(
      {
        UserId: this.auth.UserId,
        PostId: this.postData.id,
        Message: comment
      }).subscribe(z => {
      this.auth.updatePosts();
    });
  }
}
