remote_state {
  backend = "s3"

  config = {
    bucket         = "terraform-nu2dp3915g"
    dynamodb_table = "terraform"
    encrypt        = true
    key            = "magidash/state.tf"
    region         = "eu-west-1"
  }

  generate = {
    path      = "override.tf"
    if_exists = "overwrite_terragrunt"
  }
}
