# AIRBUS AEROTHON 4.0 PORTAL BY BITBYBIT TEAM

<div>
  Created by BitByBit team and maintained with ❤️ by an amazing <a href="https://www.hackerearth.com/challenges/hackathon/airbus-aerothon-40-finale/dashboard/1bfeeee/team/">team of developers</a>.
</div><br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Webiste Technology

### For Portal

We have user [ReactJS](https://reactjs.org/) for portal pages developement. We have hosted static pages.

### For hosting

For hosting of site we have user AWS S3 static hosting option which comes under free tier upto certain memory limit. Instructions for static site hosting using aws s3 can be found [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

### For CI/CD

For CI/CD we have used Github and Github Actions. We have setup workflow in github action which automatically triggers whenever there are any commits happens in main branch. Github workflow file looks like below:

```
name: s3-depl

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Build React App
        run: npm install && npm run build
      - name: Deploy app build to S3 bucket
        run: aws s3 sync ./dist/ s3://<bucket-name> --delete
```

Now, let's breakdown the code snippet above.

**name**: We define the name of this action. This will be used to identify the action amid may others you may have.

**on**: We define trigger with on : push also the branch. This workflow will run anytime you push code to the master branch.

**jobs**: Workflow run is made up of one or more jobs and they run in parallel by default.

**steps**: A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run action in your repository and each step starts either with a uses: or a name:.

**actions/checkout@v2**: This action checks-out your repository, so your workflow can access it.

**aws-actions/configure-aws-credentials@v1**: This configures AWS credentials and region environment variables for use in other GitHub Actions.

**Build React App**: This step block installs the node packages and runs the build in the package.json file, which creates a dist folder in the root directory.

**Deploy app build to S3 bucket**: This deploys the newly created build to S3 bucket <bucket-name> (replace <bucket-name> with the name of your S3 bucket. Mine is s3-github-actions).

File Reference - [/.github/workflows/main.yml](https://github.com/Prathm98/airbusaerothon/blob/main/.github/workflows/main.yml)
