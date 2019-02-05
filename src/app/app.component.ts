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
  loggedIn = false;
  posts;

  constructor(private http: HttpService, private auth: AuthService) {
  }

  getPosts() {
    this.loggedInSubject.subscribe(y => {
      this.loggedIn = y.loggedIn;
      this.http.getAllPosts().subscribe(result => {
        this.posts = result;
      })
    });
  }

  ngOnInit() {
    this.http.getAllUsers().subscribe(x => {
      this.auth.allUserName(x);
      this.loggedInSubject = this.auth.isLoggedIn;
      this.getPosts();
    });
  }

  ngOnDestroy() {
    this.loggedInSubject.unsubscribe();

  }
}
