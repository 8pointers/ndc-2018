import { Component } from '@angular/core';
import { loader } from './loader';

@Component({
  selector: 'app-loader-demo',
  template: `<div>
    <button class="btn btn-primary" (click)="fetchMessage()">Refresh</button>
    <app-loader [operation]="'fetchMessage'"></app-loader>
    {{message | async}}
  </div>`
})
export class LoaderDemoComponent {
  message: Promise<string>;
  @loader({operationName: 'fetchMessage'})
  fetchMessage() {
    return this.message = fetch('/api/motd')
      .then(response => response.text());
  }
}
