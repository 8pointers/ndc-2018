import { Component } from '@angular/core';
import memoize from './memoize';

@Component({
  selector: 'app-memoize-demo1',
  template: `<div>
    <button class="btn btn-primary" (click)="message = fetchMessage()">Refresh</button>
    {{message | async}}
  </div>`
})
export class MemoizeDemo1Component {
  message: Promise<string>;
  @memoize
  fetchMessage() {
    return fetch('/api/motd')
      .then(response => response.text());
  }
}
