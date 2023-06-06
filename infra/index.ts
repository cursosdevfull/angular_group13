import * as AWS from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import * as mime from 'mime';

import { Parameters } from './Parameters';
import { CloudFront } from './resources/Cloudfront';
import { Utils } from './resources/helpers/Utils';
import { Provider } from './resources/Provider';
import { S3 } from './resources/S3';
import { tags } from './resources/Tags';

const provider: AWS.Provider = Provider.get(
  Parameters.alias,
  Parameters.assumeRoleArn,
  Parameters.sessionName
);

const bucket: AWS.s3.Bucket = S3.createBucket(
  'cursoangular',
  Parameters.prefix,
  {
    acl: 'private',
    website: {
      indexDocument: 'index.html',
      errorDocument: 'index.html',
    },
    corsRules: [
      {
        allowedHeaders: ['*'],
        allowedMethods: ['GET', 'PUT', 'POST'],
        allowedOrigins: ['*'],
      },
    ],
  },
  tags(),
  provider
);

const websiteContentPath = Utils.getDirectory(Parameters.websiteDirectory);

const cb = (path: string) => {
  const relativeFilePath = path
    .replace(websiteContentPath + '\\', '')
    .replace('\\', '');

  new AWS.s3.BucketObject(
    relativeFilePath,
    {
      key: relativeFilePath,
      acl: 'public-read',
      contentType: mime.getType(relativeFilePath) || undefined,
      bucket,
      source: new pulumi.asset.FileAsset(path),
    },
    { provider }
  );
};

Utils.readRecursiveDirectory(websiteContentPath, cb);

const cloudfront = CloudFront.createDistribution(
  'cursoangular13',
  bucket.arn,
  bucket.websiteEndpoint,
  tags(),
  provider
);

export const bucketArn = bucket.arn;
export const bucketDomainName = bucket.websiteDomain;
export const bucketWebsiteUrl = bucket.websiteEndpoint;
export const bucketRegion = bucket.region;
export const bucketName = bucket.bucket;
export const cloudfrontDomain = cloudfront.domainName;
