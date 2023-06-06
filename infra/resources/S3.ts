import * as AWS from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';

export interface BucketOptions {
  acl?: string;
  website?: {
    indexDocument?: string;
    errorDocument?: string;
  };
  corsRules?: pulumi.Input<pulumi.Input<AWS.types.input.s3.BucketCorsRule>[]>;
}

export abstract class S3 {
  static createBucket(
    name: string,
    prefixResourceName: string,
    options: BucketOptions = {},
    tags: Record<string, string>,
    provider: AWS.Provider
  ): AWS.s3.Bucket {
    const bucket = new AWS.s3.Bucket(
      name,
      { bucket: `${prefixResourceName}-${name}`, ...options, tags },
      { provider }
    );

    new AWS.s3.BucketPublicAccessBlock(
      'exampleBucketPublicAccessBlock',
      {
        bucket: bucket.id,
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      { provider }
    );

    new AWS.s3.BucketOwnershipControls(
      'exampleBucketOwnershipControls',
      {
        bucket: bucket.id,
        rule: {
          objectOwnership: 'BucketOwnerPreferred',
        },
      },
      { provider }
    );

    return bucket;
  }
}
