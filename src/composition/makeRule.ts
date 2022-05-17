import { RuleDefinition } from '../template/RuleDefinition.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to a rule in a CloudFormation template.
 */
export interface RuleAttributes {
  name: string;
}

/**
 * Make a rule for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html | Rules}
 */
export function makeRule(
  name: string,
  definition: RuleDefinition,
): [TemplateBuilder, RuleAttributes] {
  return [TemplateFragment.rule(name, definition), { name }];
}
