const delay = timeInMillis => new Promise(resolve => setTimeout(resolve, timeInMillis));
export default function (timeInMillis: number) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      return delay(timeInMillis)
        .then(() => method.apply(this, args));
    };
  };
}
