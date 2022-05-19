import { IntrinsicValue } from '../template/Fn.js';

export interface ResourceInstanceType<Attribs extends object> {
  out: Attribs;
  ref: IntrinsicValue;
}
