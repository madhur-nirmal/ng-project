import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  users: User[] = [
    { userName: 'admin', password: 'admin' },
    { userName: 'prathmesh', password: '123' },
  ];

  getAllUsersDetails() {
    return this.users;
  }
}
