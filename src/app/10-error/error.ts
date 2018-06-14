import { Component } from '@angular/core';

const errors = [];

export function error(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  descriptor.value = function () {
    return method.apply(this, arguments)
      .then(r => r, e => errors.push(e));
  };
}

@Component({
  selector: 'app-error',
  template: `<div *ngFor="let error of errors; let i = index" class="alert alert-danger">
    {{error}}<button class="close" (click)="close(i)">&times;</button>
  </div>`
})
export class ErrorComponent {
  public errors: any[];
  close(i: number) {
    this.errors.splice(i, 1);
  }
  constructor() {
    this.errors = errors;
  }
}
