import * as AWS from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';

export class CloudFront {
  static createDistribution(
    name: string,
    bucketArn: pulumi.Input<string>,
    endpoint: pulumi.Input<string>,
    tags: Record<string, string>,
    provider: AWS.Provider
  ): AWS.cloudfront.Distribution {
    return new AWS.cloudfront.Distribution(
      'distribution',
      {
        enabled: true,
        waitForDeployment: true,
        defaultRootObject: 'index.html',
        origins: [
          {
            originId: bucketArn,
            domainName: endpoint,
            customOriginConfig: {
              originProtocolPolicy: 'http-only',
              httpPort: 80,
              httpsPort: 443,
              originSslProtocols: ['TLSv1.2'],
            },
          },
        ],
        defaultCacheBehavior: {
          targetOriginId: bucketArn,
          viewerProtocolPolicy: 'allow-all',
          allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
          cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
          forwardedValues: {
            queryString: false,
            cookies: {
              forward: 'none',
            },
          },
          minTtl: 0,
          defaultTtl: 86400,
          maxTtl: 31536000,
        },
        viewerCertificate: {
          cloudfrontDefaultCertificate: true,
        },
        restrictions: {
          geoRestriction: {
            restrictionType: 'none',
          },
        },
      },
      { provider }
    );
  }
}
