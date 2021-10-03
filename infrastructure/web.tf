resource "heroku_app" "magidash_web" {
  name   = "cw-magidash-web"
  region = "eu"

  config_vars = {
    API_URL = heroku_app.magidash_api.web_url
  }
}
