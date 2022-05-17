import { IntrinsicValue } from '../template/Fn.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to a condition in a CloudFormation template.
 */
export interface ConditionAttributes {
  name: string;
}

/**
 * Make a condition for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html | Conditions}
 */
export function makeCondition(
  name: string,
  definition: IntrinsicValue,
): [TemplateBuilder, ConditionAttributes] {
  return [TemplateFragment.condition(name, definition), { name }];
}
