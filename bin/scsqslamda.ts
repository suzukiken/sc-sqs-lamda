#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ScsqslamdaStack } from '../lib/scsqslamda-stack';

const app = new cdk.App();
new ScsqslamdaStack(app, 'ScsqslamdaStack');
