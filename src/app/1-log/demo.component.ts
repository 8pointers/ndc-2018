import { Component } from '@angular/core';
import log from './log';

@Component({
  selector: 'app-log-demo1',
  template: `<div>
    <button class="btn btn-primary" (click)="message = sayHello('World')">Say Hello</button>
    {{message}}
  </div>`
})
export class LogDemo1Component {
  message = '';

  @log
  sayHello(name) {
    return `Hello ${name}!`;
  }
}
