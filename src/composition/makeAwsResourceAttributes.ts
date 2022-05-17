import {
  AttributeTypeFor,
  ResourceAttributes,
  ResourceType,
} from '@squareball/cfntypes';
import { makeResourceAttributes } from './makeResourceAttributes.js';

/**
 * Make an object which contains properties to access the output attribtues of
 * an AWS resoruce.
 */
export function makeAwsResourceAttributes<T extends ResourceType>(
  type: T,
  logicalResourceId: string,
): AttributeTypeFor<T> {
  return makeResourceAttributes<AttributeTypeFor<T>>(
    logicalResourceId,
    ResourceAttributes[type] as any,
  );
}
