import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  users: User[] = [];

  login(userName: string, password: string) {
    this.users = this.loginService.getAllUsersDetails();

    for (let user of this.users) {
      if (user.userName == userName && user.password == password) {
        return this.router.navigate(['/todos']);
      }
    }
    return alert('Invalid Details');
  }
}
