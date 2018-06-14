import { Component } from '@angular/core';
import { loader } from '../7-loader/loader';
import delay from '../8-delay/delay';
import timeout from './timeout';

@Component({
  selector: 'app-timeout-demo',
  template: `<div>
    <button class="btn btn-primary" (click)="message = fetchMessage()">Refresh</button>
    <app-loader [operation]="'timeoutDemo'"></app-loader>
    {{message | async}}
  </div>`
})
export class TimeoutDemoComponent {
  message: Promise<string>;

  @loader({operationName: 'timeoutDemo'})
  @timeout(2000)
  @delay(3000)
  fetchMessage() {
    return fetch('/api/motd')
      .then(response => response.text());
  }
}
