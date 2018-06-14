export default function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  const results = {};
  descriptor.value = function (...args) {
    const key = JSON.stringify(args);
    if (!results.hasOwnProperty(key)) {
      results[key] = method.apply(this, args);
    }
    return results[key];
  };
}
