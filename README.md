# @cfnboost/template

This package contains type definitions for AWS CloudFormation templates, so that you can create CloudFormation templates in code.

## Example

```typescript
import { ResourceType } from '@cfnboost/resources';
import { Fn, Template, makePolicyDocument } from '@cfnboost/template';

const template: Template = {
  Resources: {
    MyLambda: {
      Type: ResourceType.LambdaFunction,
      Properties: {
        Handler: 'index.handler',
        Role: Fn.GetAtt('MyLambdaRole', 'Arn'),
        Code: {
          S3Bucket: 'lambda-functions',
          S3Key: 'amilookup.zip',
        },
        Runtime: 'nodejs12.x',
        Timeout: 25,
        TracingConfig: {
          Mode: 'Active',
        },
      },
    },
    MyLambdaRole: {
      Type: ResourceType.IAMRole,
      Properties: {
        AssumeRolePolicyDocument: makePolicyDocument({
          Action: 'sts:AssumeRole',
          Principal: { Service: 'lambda.amazonaws.com' },
          Effect: PolicyEffect.Allow,
        }),
        Policies: [
          {
            PolicyName: 'Logging',
            PolicyDocument: makePolicyDocument({
              Effect: PolicyEffect.Allow,
              Action: [
                'logs:CreateLogGroup',
                'logs:CreateLogStream',
                'logs:PutLogEvents',
                'xray:PutTraceSegments',
                'xray:PutTelemetryRecords',
              ],
              Resource: '*',
            }),
          },
        ],
      },
    },
  },
};
```
