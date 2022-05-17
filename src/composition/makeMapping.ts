import { IntrinsicValue } from '../template/Fn.js';
import { TemplateMap } from '../template/TemplateMap.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to a mapping in a CloudFormation template.
 */
export interface MappingAttributes {
  name: string;
}

/**
 * Make a condition for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html | Mappings}
 */
export function makeMapping(
  name: string,
  definition: TemplateMap<IntrinsicValue>,
): [TemplateBuilder, MappingAttributes] {
  return [TemplateFragment.mapping(name, definition), { name }];
}
