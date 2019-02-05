import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpService, private auth: AuthService) {
  }

  users;

  ngOnInit() {
      this.users = this.auth.gettAllUserNames();
  }
}
