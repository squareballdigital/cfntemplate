import { IntrinsicValue } from '../template/Fn.js';
import { formatArn } from './formatArn.js';

export function bucketArn(bucketName: string, path?: string): IntrinsicValue {
  return formatArn({
    accountId: null,
    region: null,
    resourceId: path ? path : bucketName,
    resourceType: path ? bucketName : undefined,
    service: 's3',
  });
}
