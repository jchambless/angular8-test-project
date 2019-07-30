import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUser } from './models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  ngOnInit(): void {
    this.users$ = of<IUser[]>([
      {
        Id: 1,
        Username: 'jdoe',
        FirstName: 'John',
        LastName: 'Doe'
      },
      {
        Id: 2,
        Username: 'janedoe',
        FirstName: 'Jane',
        LastName: 'Doe'
      },
      {
        Id: 3,
        Username: 'jchambless',
        FirstName: 'James',
        LastName: 'Chambless'
      }
    ]);
  }
}