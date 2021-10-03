# MagiDash Web

## Prerequisites

1. [nvm](https://github.com/nvm-sh/nvm)
1. [docker](https://docs.docker.com/get-docker/)

## Setup

```sh
$ git clone git@github.com:ChrisWilding/magidash.git
$ cd web
```

## How To

### Setup

```sh
$ nvm install
$ nvm use
$ npm install
```

### Run

```sh
$ npm run dev
```

#### Options

| Option  | Default                                | Description                                                     |
| ------- | -------------------------------------- | --------------------------------------------------------------- |
| PORT    | 8080                                   | The PORT to bind. Overridden by Heroku on deployment.           |
| API_URL | https://cw-magidash-api.herokuapp.com/ | The API service to use. Defaults to the API deployed on Heroku. |

### Lint and Test

```sh
$ npm run lint
$ npm run test
```

### Deploy

GitHub Actions will push a docker image built from `main` to Heroku's container registry. However, that does not automatially release the new image to Heroku. To deploy to Heroku manually run -

```sh
$ heroku container:release web -a cw-magidash-web
```


