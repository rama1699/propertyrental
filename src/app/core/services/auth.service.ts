import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(email: string, password: string) {
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email, password });
  }

  signup(user: Omit<User, 'id'>) {
    // TODO: Implement actual signup logic
    console.log('Signup attempt:', user);
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}