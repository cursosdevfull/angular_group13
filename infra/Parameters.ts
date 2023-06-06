import * as pulumi from '@pulumi/pulumi';

export abstract class Parameters {
  private static readonly awsConfig = new pulumi.Config('aws');
  private static readonly websiteConfig = new pulumi.Config('website');
  private static readonly project = pulumi.getProject();
  private static readonly stack = pulumi.getStack();

  static get region(): pulumi.Input<string> {
    return this.awsConfig.require('region');
  }

  static get sessionName(): pulumi.Input<string> {
    return this.awsConfig.require('sessionName');
  }

  static get assumeRoleArn(): pulumi.Input<string> {
    return this.awsConfig.require('assumeRoleArn');
  }

  static get alias(): string {
    return this.awsConfig.require('alias');
  }

  static get prefix(): string {
    return `cursosdev-${this.project}-${this.stack}`;
  }

  static get websiteDirectory(): string {
    return this.websiteConfig.require('directory');
  }
}
