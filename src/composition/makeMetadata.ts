import { IntrinsicValue } from '../template/Fn.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Attributes related to a metadata entry in a CloudFormation template.
 */
export interface MetadataAttributes {
  name: string;
}

/**
 * Make a metadata entry for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html | Metadata}
 */
export function makeMetadata(
  name: string,
  definition: IntrinsicValue,
): [TemplateBuilder, MetadataAttributes] {
  return [TemplateFragment.metadata(name, definition), { name }];
}
