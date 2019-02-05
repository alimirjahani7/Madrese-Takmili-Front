import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  ngOnInit() {
  }

  constructor(private http: HttpService) {
  }

  UserId;
  isLoggedIn = new Subject();
  updatePostsSubject = new Subject();

  updatePosts() {
    this.updatePostsSubject.next({true: true});
  }

  login(Username, Password) {
    this.http.login({Username, Password}).subscribe(result => {
      result = <number> result;
      if (result >= 0) {
        this.UserId = result;
        this.isLoggedIn.next({loggedIn: true});
      } else {
        this.UserId = -1;
        this.isLoggedIn.next({loggedIn: false});
      }
    });
  }

  getIdUserName() {

  }

  usernames = []

  allUserName(x) {
    this.usernames = x;

  }

  signUp(Username, Password) {
    this.http.signUpUser({Username, Password}).subscribe(user => {
      user = <number>user;
      if (user.id >= 0) {
        this.UserId = user.id;
        this.isLoggedIn.next({loggedIn: true});
      } else {
        this.UserId = -1;
        this.isLoggedIn.next({loggedIn: false});
      }
    });
  }
}
