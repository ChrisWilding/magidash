FROM node:14-alpine AS dependencies

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci


FROM node:alpine AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build && npm install --production --ignore-scripts --prefer-offline


FROM node:alpine AS run

WORKDIR /app

ENV NODE_ENV production

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
