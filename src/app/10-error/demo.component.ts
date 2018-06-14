import { Component } from '@angular/core';
import { error } from './error';

@Component({
  selector: 'app-error-demo',
  template: `<div>
    <button class="btn btn-primary" (click)="fetchMessage()">Refresh</button>
    <app-loader [operation]="'fetchMessage'"></app-loader>
    {{message | async}}
  </div>`
})
export class ErrorDemoComponent {
  message: Promise<string>;
  @error
  fetchMessage() {
    return this.message = fetch('/api/missing')
      .then(response => response.ok ? response.text() : Promise.reject('communicationError'));
  }
}
