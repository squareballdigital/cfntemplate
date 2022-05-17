import {
  AttributeTypeFor,
  ResourceAttributes,
  ResourceType,
  ResourceTypes,
} from '@squareball/cfntypes';
import {
  ResourceDefinition,
  ResourceOptions,
} from '../template/ResourceDefinition.js';
import { ResourceInstance } from './ResourceInstance.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Make a resource in the template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html | Resources}
 */
export function makeAwsResource<T extends ResourceType>(
  name: string,
  type: T,
  props: ResourceTypes[T],
  opts?: ResourceOptions,
): [TemplateBuilder, ResourceInstance<AttributeTypeFor<T>>] {
  return [
    TemplateFragment.resource(name, {
      ...opts,
      Type: type,
      Properties: props,
    } as ResourceDefinition),
    new ResourceInstance(name, ResourceAttributes[type]),
  ];
}
