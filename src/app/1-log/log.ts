export default function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  descriptor.value = function (...args) {
    console.log(...args);
    return method.apply(this, args);
  };
}
