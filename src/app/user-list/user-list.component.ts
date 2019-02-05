import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  users;

  ngOnInit() {
    this.http.getAllUsers().subscribe(y => {
      this.users = y;
    })

  }

}
