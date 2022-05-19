import { Fn, IntrinsicValue } from '../template/Fn.js';
import { makeResourceAttributes } from './makeResourceAttributes.js';
import { ResourceInstanceType } from './ResourceInstanceType.js';

/**
 * Represents an instance of a resource in a template.
 */
export class ResourceInstance<Attribs extends object>
  implements ResourceInstanceType<Attribs>
{
  private readonly attribs: Attribs;

  constructor(public readonly name: string, attributes?: (keyof Attribs)[]) {
    this.attribs = makeResourceAttributes<Attribs>(name, attributes);
  }

  public get out(): Attribs {
    return this.attribs;
  }

  public get ref(): IntrinsicValue {
    return Fn.Ref(this.name);
  }
}
