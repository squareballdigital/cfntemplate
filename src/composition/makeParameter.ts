import { Fn, IntrinsicValue } from '../template/Fn.js';
import { ParameterDefinition } from '../template/ParameterDefinition.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to a parameter in a CloudFormation template.
 */
export interface ParameterAttributes {
  name: string;
  ref: IntrinsicValue;
}

/**
 * Make a parameter for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html | Parameters}
 */
export function makeParameter(
  name: string,
  definition: ParameterDefinition,
): [TemplateBuilder, ParameterAttributes] {
  return [
    TemplateFragment.parameter(name, definition),
    {
      name,
      ref: Fn.Ref(name),
    },
  ];
}
