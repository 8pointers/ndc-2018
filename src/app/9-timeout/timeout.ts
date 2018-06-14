const delay = timeInMillis => new Promise(resolve => setTimeout(resolve, timeInMillis));

export default function(millis: number) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      return Promise.race([
        method.apply(this, args),
        delay(millis).then(() => Promise.reject('timeout'))
      ]);
    };
  };
}
