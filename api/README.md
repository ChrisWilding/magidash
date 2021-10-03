# MagiDash API

## Prerequisites

1. [maven](https://maven.apache.org/install.html)
1. Java 17, available from [Adoptium](https://adoptium.net), [Oracle](https://jdk.java.net/17/) and others
1. [docker](https://docs.docker.com/get-docker/)

## Setup

```sh
$ git clone git@github.com:ChrisWilding/magidash.git
$ cd api
```

## How To

### Run

```sh
$ mvn spring-boot:run
```

### Test

```sh
$ mvn clean verify
```

### Deploy

GitHub Actions will push a docker image built from `main` to Heroku's container registry. However, that does not automatially release the new image to Heroku. To deploy to Heroku manually run -

```sh
$ heroku container:release web -a cw-magidash-api
```
