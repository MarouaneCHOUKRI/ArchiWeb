import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-info-users',
  templateUrl: './modifier-info-users.component.html',
  styleUrls: ['./modifier-info-users.component.css']
})
export class ModifierInfoUsersComponent {
  users: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8081/Users')
      .subscribe(users => {
        this.users = users;
      });
  }
}
