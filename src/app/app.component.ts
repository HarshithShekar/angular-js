import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngIf = "isLoggedIn; else loggedOut">
  Login-Successful.
  </div>
  <ng-template #loggedOut>
  Login-failed.
  </ng-template>`
  })
export class AppComponent  {
  isLoggedIn=true;
}