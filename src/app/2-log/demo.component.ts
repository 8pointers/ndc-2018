import { Component } from '@angular/core';
import log from './log';

@Component({
  selector: 'app-log-demo2',
  template: `<div>
    <button class="btn btn-primary" (click)="message = sayHello('World')">Say Hello</button>
    {{message}}
  </div>`
})
export class LogDemo2Component {
  message = '';

  @log({name: 'LogDemoComponent'})
  sayHello(name) {
    return `Hello ${name}!`;
  }
}
