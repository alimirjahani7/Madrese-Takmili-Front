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
  posts = [
    {
      post_id: 12345,
      user_id: 1234,
      number_of_like: 132,
      image_id: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiKlK2dq4vgAhUQDuwKHffgAMkQPAgH',
      user_name: 1234,
      caption: 'shish sikh kabab sikhi 6 hezar',
    },
    {
      post_id: 123456,
      user_id: 12344,
      number_of_like: 1232,
      image_id: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiKlK2dq4vgAhUQDuwKHffgAMkQPAgH',
      user_name: 12354,
      caption: 'shish sikh kabab sikhi 6 hezar',
    }
  ];

  constructor(private http: HttpService, private auth: AuthService) {
  }

  ngOnInit() {
    this.loggedInSubject = this.auth.isLoggedIn;
    this.loggedInSubject.subscribe(x => {
      this.loggedIn = x.loggedIn;
    });
  }

  ngOnDestroy() {
    this.loggedInSubject.unsubscribe();

  }
}
