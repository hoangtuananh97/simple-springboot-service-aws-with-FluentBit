#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {SpringbootFargateCdkStack} from '../lib/springboot-fargate-cdk-stack';

const app = new cdk.App();
const DEFAULT_REGION = 'ap-southeast-1';
const context = app.node.getAllContext();
console.log("getAllContext: ", context);
console.log("branchName: ", context.branchName || "main");
new SpringbootFargateCdkStack(app, 'SpringbootFargateCdkStackTesting2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: DEFAULT_REGION,
  },
});