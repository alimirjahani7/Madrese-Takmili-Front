import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private http: HttpService) {
  }

  sendPostForm: FormGroup;

  ngOnInit() {
    this.sendPostForm = this.formBuilder.group({
      image: ['', Validators.required],
      caption: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  sendPost() {
    const image = this.sendPostForm.controls['image'].value;
    const caption = this.sendPostForm.controls['caption'].value;
    const post = {
      Context: caption,
      UserId: this.auth.UserId,
      FileName: image,
    };
    this.http.postPost(post).subscribe(y => {
      console.log(y);
      this.auth.updatePosts();
    });

  }
}
