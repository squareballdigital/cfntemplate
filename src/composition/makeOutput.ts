import { OutputDefinition } from '../template/OutputDefinition.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to an output in a CloudFormation template.
 */
export interface OutputAttributes {
  name: string;
}

/**
 * Make an output for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html | Outputs}
 */
export function makeOutput(
  name: string,
  definition: OutputDefinition,
): [TemplateBuilder, OutputAttributes] {
  return [TemplateFragment.output(name, definition), { name }];
}
