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
    return fetch('https://694y9v59lf.execute-api.eu-west-2.amazonaws.com/latest/motd')
      .then(response => response.text());
  }
}
