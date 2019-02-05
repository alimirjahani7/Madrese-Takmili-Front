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

  ngOnInit() {
    this.loggedInSubject = this.auth.isLoggedIn;
    this.loggedInSubject.subscribe(x => {
      this.loggedIn = x.loggedIn;
      this.http.getAllPosts().subscribe(result => {
        this.posts = result;
      })
    });
  }

  ngOnDestroy() {
    this.loggedInSubject.unsubscribe();

  }
}
