import { Component } from '@angular/core';
import { loader } from '../7-loader/loader';
import delay from './delay';
@Component({
  selector: 'app-delay-demo',
  template: `<div>
    <button class="btn btn-primary" (click)="message = fetchMessage()">Refresh</button>
    <app-loader [operation]="'delayMessage'"></app-loader>{{message | async}}
  </div>`
})
export class DelayDemoComponent {
  message: Promise<string>;
  @loader({operationName: 'delayMessage'})
  @delay(2000)
  fetchMessage() {
    return fetch('/api/motd').then(response => response.text());
  }
}
