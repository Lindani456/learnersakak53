import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private correctPassword = '123456';

  constructor() {}

  checkPassword(password: string): boolean {
    return password === this.correctPassword;
  }

  updatePassword(newPassword: string): void {
    // Implement the logic to update the password (e.g., save to a backend)
    this.correctPassword = newPassword;
  }
}


