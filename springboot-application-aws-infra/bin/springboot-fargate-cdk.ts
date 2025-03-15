#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {SpringbootFargateCdkStack} from '../lib/springboot-fargate-cdk-stack';

const app = new cdk.App();
const DEFAULT_REGION = 'ap-southeast-1';

new SpringbootFargateCdkStack(app, 'SpringbootFargateCdkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: DEFAULT_REGION,
  },
});