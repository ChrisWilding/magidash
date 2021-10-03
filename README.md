# MagiDash

## Components

### Infrastructure

See [README.md](./infrastructure/README.md)

### API

See [README.md](./api/README.md)

Deployed to Heroku here - https://cw-magidash-api.herokuapp.com

### Web

See [README.md](./web/README.md)

Deployed to Heroku -here https://cw-magidash-web.herokuapp.com

## Why Spring Boot?

I've used Spring Boot for the backend API implementation. It's a popular, dependable and well understood solution for back end web development.

## Why Next?

I've used Next for the frontend web implementation. I've not had the opportunity to use Next before but I've been meaning to look at it for a while. Rather than following the [backend for frontend pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends) and having to setup up a separate server you can use the [API routes](https://nextjs.org/docs/api-routes/introduction) feature of Next.

Currently, both the frontend and backend are deployed to Heroku. This is mostly for convenience (I've used it before) and cost (it's free) but it is simple and does have a lot of limitations. If using another cloud provider or on premises deployment a different strategy could be adopted with Next. Using Next with API routes would allow for the web service to be hosted in a public subnet. The API can then be moved to a private subnet without public ingress. In addition, CORS would not need configuring on the API. As Next is providing it's own backend and requests to the API are made from there, to the browser all requests appear to be same origin. It would also then be possible to move the database to a dedicated subnet that is only accessible from the private subnet.

The addition of a CDN and WAF may also be beneficial.

## What's missing?

This is a demo application, not a fully productionised service, so understandably there's a number of things that could be improved. I've outlined some of the things I consider important below.

### Experience and Visual Design

The visual design is using the very basic design provided by the Next starter. Experience and visual design is not my strength and would benefit significantly from the support of an XD specialist. In recent years, most employers that I have worked for have had in house design systems and frameworks with a corresponding react and CSS tool kits. These provide significant advantage creating visually consistent front end applications as well as providing a baseline of accessibility.

I have simply taken and run with the tooling provided out of the box by Next for CSS and styling. I would evaluate and adopt a strategy for managing styling. Previously I have used BEM and ITCSS. However, CSS modules and CSS-in-JS solutions are much more popular recently.

We often have users with a diverse range of additional needs and need to ensure our applications are available and usable by colleagues and customers with colour blindness, or additional needs with visibility and mobility. I would add tooling to support accessibility testing. Sometimes manual testing is necessary but tools like [axe](https://github.com/dequelabs/axe-core) can help automated some of the essentials.

### Formatting and Linting Tooling

I've left it quite light on tooling around formatting and linting, mostly sticking to the default ESLint configuration provided by Next but with the addition of prettier. I appreciate opinions differ between people and programming community with regards to linting and formatting rules but I would personally use a stricter ESLint rule set, probably adopting AirBnB's rule set. I'd also change the typescript compiler configuration to increase it's strictness. On the backend I would also add SonarQube.

### Infrastructure

Infrastructure as Code tooling choice is often influenced by public cloud vs on premises deployment. The infrastructure is currently managed using Terraform which is applied from a developers machine. I would automated this, either through CI/CD or using a bespoke tool like [Atlantis](https://www.runatlantis.io).

### Monitoring and Performance

At the moment, the error handling in the application is very limited and insight into what is happening in the services is only what is available through Heroku's rudimentary log viewer. I would add structured logging with log reporting to an ELK stack or similar and metrics with Prometheus. I'd also add correlation ids to all requested and include them in any errors reporting. Distributed tracing would another nice to have, as well as an APM monitor tool like New Relic.

There has been no volume or performance testing on any of the services. Previous I have used gatling or k6 for these types of test.

### Security

I would add static analysis tooling and well as active security scanning using a tool like OWASP ZAP (e.g. https://github.com/zaproxy/action-baseline). I'd use a tool like dependabot to ensure dependencies are up to date and container scanning to monitor for reported CVEs.

Currently there are no users, roles or authentication implemented. A formal penetration testing maybe useful, particularly after roles have been added to validate permission are implemented correctly for user roles.
