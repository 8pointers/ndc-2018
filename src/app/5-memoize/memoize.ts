export default function memoize(options?: any) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    const results = {};
    descriptor.value = function (...args) {
      const key = args.join('-');
      if (results.hasOwnProperty(key) && results[key].expires >= Date.now()) {
        return results[key].value;
      } else {
        const result = method.apply(this, arguments);
        results[key] = {
          value: result,
          expires: Date.now() + options.expiresInMillis || Infinity
        };
        return result;
      }
    };
  };
}
