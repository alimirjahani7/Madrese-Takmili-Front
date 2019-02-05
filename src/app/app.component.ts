import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loggedInSubject;
  postSubject;
  loggedIn = false;
  posts;
  updating = true;

  constructor(private http: HttpService, private auth: AuthService) {
  }

  getPosts() {
    this.updating = true;
    this.loggedIn = true;
    this.http.getAllPosts().subscribe(result => {
      this.posts = result;
      this.updating = false;
    })
  }

  ngOnInit() {
    this.postSubject = this.auth.updatePostsSubject;
    this.http.getAllUsers().subscribe(x => {
      this.auth.allUserName(x);
      this.loggedInSubject = this.auth.isLoggedIn;
      this.loggedInSubject.subscribe(y => {
        this.getPosts();
      });
      this.postSubject.subscribe(z => {
        this.getPosts();
      })

    });

  }

  ngOnDestroy() {
    this.loggedInSubject.unsubscribe();

  }
}
