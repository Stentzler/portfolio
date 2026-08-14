# Production deployment

Pushing to `main` runs `.github/workflows/deploy-production.yml` in the protected
`production` GitHub Environment. The workflow validates the static site, creates
or reuses an immutable ECR image tagged with the commit SHA, and asks Systems
Manager to replace the loopback-bound `vinicius-portfolio` container on EC2.

## Required GitHub Environment configuration

Create the `production` Environment before enabling the Terraform deployment
role. Configure these values there:

| Kind | Name | Value |
| --- | --- | --- |
| Variable | `AWS_REGION` | The Terraform environment Region, currently `us-east-1`. |
| Variable | `ECR_REPOSITORY_URL` | Terraform output `portfolio_ecr_repository_url`. |
| Variable | `SSM_DEPLOYMENT_TARGET_PARAMETER` | Terraform output `frontend_deployment_target_parameter_name`. |
| Secret | `AWS_DEPLOY_ROLE_ARN` | Terraform output `portfolio_deployment_role_arn`. |

The Terraform role is deliberately disabled until the GitHub repository exists
and its organization-specific OIDC subject is known. Set
`enable_portfolio_github_deployment = 1` and the exact
`portfolio_github_oidc_subject` only after the Environment has been created.
For this repository, its subject format is
`repo:Stentzler@79855747/portfolio@REPOSITORY_ID:environment:production`.

The EC2 instance role pulls the image from ECR; no AWS credentials are stored
in the container or this repository.
