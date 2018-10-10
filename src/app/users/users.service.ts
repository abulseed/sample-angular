import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serviceUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>(this.serviceUrl).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  getUser(userId: number) {
    return this.httpClient.get<User>(`${this.serviceUrl}/${userId}`);
  }

  editUser(username: string, jobtitle: string, id: string) {
    return this.httpClient.put(`${this.serviceUrl}/${id}`, {
      'name': username,
      'job': jobtitle
    });
  }

  addUser(username: string, jobtitle: string) {
    return this.httpClient.post(`${this.serviceUrl}`, {
      'name': username,
      'job': jobtitle
    });
  }

  deleteUser(userId: string) {
    return this.httpClient.delete(`${this.serviceUrl}/${userId}`);
  }
}
