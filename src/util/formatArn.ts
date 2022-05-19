import { AwsParam } from '../template/AwsParam.js';
import { Fn, IntrinsicValue } from '../template/Fn.js';

export interface ArnParts {
  accountId?: string | null;
  delimiter?: string;
  partition?: string;
  region?: string | null;
  resourceId: string;
  resourceType?: string;
  service: string;
}

export function formatArn({
  accountId = AwsParam.AccountId,
  delimiter = '/',
  partition = AwsParam.Partition,
  region = AwsParam.Region,
  resourceId,
  resourceType,
  service,
}: ArnParts): IntrinsicValue {
  if (resourceType) {
    return Fn.Join(':', [
      'arn',
      partition,
      service,
      region ?? '',
      accountId ?? '',
      Fn.Join(delimiter, [resourceType, resourceId]),
    ]);
  } else {
    return Fn.Join(':', [
      'arn',
      partition,
      service,
      region ?? '',
      accountId ?? '',
      resourceId,
    ]);
  }
}
