resource "heroku_app" "magidash_api" {
  name   = "cw-magidash-api"
  region = "eu"

  config_vars = {
    SPRING_PROFILES_ACTIVE = "herkou"
  }
}

resource "heroku_addon" "magidash_api_database" {
  app  = heroku_app.magidash_api.name
  plan = "jawsdb:kitefin"

  config = {
    "version" = "5.7"
  }
}
