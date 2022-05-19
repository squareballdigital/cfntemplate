import {
  CustomResourcePropertiesBase,
  CustomResourceType,
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
export function makeCustomResource<
  T extends string,
  P extends CustomResourcePropertiesBase,
  A extends object = never,
>(
  type: CustomResourceType<T>,
  name: string,
  props: P,
  opts?: ResourceOptions,
  attribs?: (keyof A)[],
): [TemplateBuilder, ResourceInstance<A>] {
  return [
    TemplateFragment.resource(name, {
      ...opts,
      Type: type,
      Properties: props,
    } as ResourceDefinition),
    new ResourceInstance<A>(name, attribs),
  ];
}
