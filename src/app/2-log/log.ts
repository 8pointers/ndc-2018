export default function (options?: any) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      console.log.apply(console, [options.name, ...args]);
      const result = method.apply(this, arguments);
      return result;
    };
  };
}
