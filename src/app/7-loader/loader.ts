import { Component, Input } from '@angular/core';
const operationsInProgress = {};
export function loader(options?: any) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function () {
      const result = method.apply(this, arguments);
      let operationName = options && options.operationName;
      operationName = (typeof operationName === 'function' ? operationName.apply(undefined, arguments) : operationName) || propertyName;
      operationsInProgress[operationName] = true;
      if (result.then) {
        result.then(() => operationsInProgress[operationName] = false, () => operationsInProgress[operationName] = false);
      }
      return result;
    };
  };
}
@Component({
  selector: 'app-loader',
  template: '<i *ngIf="operationsInProgress[operation]" class="fa fa-spinner fa-spin"></i>'
})
export class LoaderComponent {
  @Input()
  operation: string;
  public operationsInProgress: any;
  constructor() {
    this.operationsInProgress = operationsInProgress;
  }
}
