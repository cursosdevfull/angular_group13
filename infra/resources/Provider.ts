import * as AWS from '@pulumi/aws';
import { Input } from '@pulumi/pulumi';

export abstract class Provider {
  private static readonly region: AWS.Region = AWS.config.requireRegion();

  static get(
    name: string,
    roleArn: Input<string>,
    sessionName: Input<string>
  ): AWS.Provider {
    return new AWS.Provider(name, {
      assumeRole: {
        roleArn,
        sessionName,
      },
      region: this.region,
    });
  }
}
