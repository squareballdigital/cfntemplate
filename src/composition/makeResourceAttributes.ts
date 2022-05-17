import { Fn } from '../template/Fn.js';

/**
 * Make a Proxy object that translates member access into `Fn::GetAtt` calls for
 * the given `logicalResourceId`. If `names` is specified, attemptes to access
 * an invalid attribtue name will throw an exception; otherwise all attribtues
 * are allowed.
 */
export function makeResourceAttributes<T extends object>(
  logicalResourceId: string,
  names?: (keyof T)[],
): T {
  return new Proxy(Object.create(null), {
    get: (_, name) => {
      if (typeof name === 'string') {
        if (!names || (names as string[]).includes(name)) {
          return Fn.GetAtt(logicalResourceId, name);
        }
      }
      const nameStr = String(name);
      throw new Error(
        `attribute name '${nameStr}' not valid for resource '${logicalResourceId}'`,
      );
    },
  }) as T;
}
