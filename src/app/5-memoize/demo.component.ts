import { Component } from '@angular/core';
import memoize from './memoize';

@Component({
  selector: 'app-memoize-demo2',
  template: `<div>
    <button class="btn btn-primary" (click)="message = fetchMessage()">Refresh</button>
    {{message | async}}
  </div>`
})
export class MemoizeDemo2Component {
  message: Promise<string>;
  @memoize({expiresInMillis: 1000})
  fetchMessage() {
    return fetch('/api/motd')
      .then(response => response.text());
  }
}
