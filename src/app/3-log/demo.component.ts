import { Component } from '@angular/core';
import log from './log';

@Component({
  selector: 'app-log-demo3',
  template: `<div>
    <button class="btn btn-primary" (click)="message = sayHello('World')">Say Hello</button>
    {{message}}
  </div>`
})
export class LogDemo3Component {
  message = '';

  @log({format: args => ['LogDemoComponent', new Date().toLocaleString(), ...args]})
  sayHello(name) {
    return `Hello ${name}!`;
  }
}
