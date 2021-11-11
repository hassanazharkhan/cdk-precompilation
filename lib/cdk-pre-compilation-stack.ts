import * as cdk from '@aws-cdk/core';
import * as lambdaNodejs from '@aws-cdk/aws-lambda-nodejs'
export class CdkPreCompilationStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaNodejs.NodejsFunction(this, 'PreCompiledLambda', {
      entry: './lib/lambda/index.ts',
      bundling: {
        preCompilation: true
      }
    })
  }
}
