import { IntrinsicValue } from '../template/Fn.js';
import { formatArn } from './formatArn.js';

export function localArn(service: string, resourceId: string): IntrinsicValue;
export function localArn(
  service: string,
  resourceType: string,
  resourceId: string,
): IntrinsicValue;
export function localArn(
  service: string,
  resourceTypeOrId: string,
  resourceId?: string,
): IntrinsicValue {
  return formatArn({
    service,
    resourceType: resourceId ? resourceTypeOrId : undefined,
    resourceId: resourceId ? resourceId : resourceTypeOrId,
  });
}
