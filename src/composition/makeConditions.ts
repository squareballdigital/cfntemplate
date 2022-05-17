import { IntrinsicValue } from '../template/Fn.js';
import { makeCondition } from './makeCondition.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * A map of names for condition elements in a CloudFormation template.
 */
export type ConditionsAttributes<N extends string> = {
  [K in N]: string;
};

/**
 * A map of condition names to definitions.
 */
export type ConditionsProps<N extends string> = {
  [K in N]: IntrinsicValue;
};

/**
 * Make multiple conditions for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html | Conditions}
 */
export function makeConditions<N extends string>(
  props: ConditionsProps<N>,
): [TemplateBuilder, ConditionsAttributes<N>] {
  const builders: TemplateBuilder[] = [];
  const attribs = {} as ConditionsAttributes<N>;

  for (const [k, v] of Object.entries(props)) {
    const [builder, { name }] = makeCondition(k, v);
    builders.push(builder);
    attribs[k as N] = name;
  }

  return [TemplateFragment.compose(...builders), attribs];
}
