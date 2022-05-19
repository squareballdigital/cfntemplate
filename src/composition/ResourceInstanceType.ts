import { IntrinsicValue } from '../template/Fn.js';

export interface ResourceInstanceType<Attribs extends object> {
  name: string;
  out: Attribs;
  ref: IntrinsicValue;
}
