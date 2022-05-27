# AIRBUS AEROTHON 4.0 PORTAL BY BITBYBIT TEAM

<div>
  Created by BitByBit team and maintained with ❤️ by an amazing <a href="https://www.hackerearth.com/challenges/hackathon/airbus-aerothon-40-finale/dashboard/1bfeeee/team/">team of developers</a>.
</div><br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Webiste Technology

### For Portal

[ReactJS](https://reactjs.org/) for portal pages developement. We have hosted static pages.

### For hosting

For hosting of site we have user AWS S3 static hosting option which comes under free tier upto certion memory limit. Reference to static site hosting using aws s3 instructions are [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

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

[/.github/workflows/main.yml](https://github.com/Prathm98/airbusaerothon/blob/main/.github/workflows/main.yml)

Detailed instructions to setup github workflow with AWS S3 can be found here [here](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e).
