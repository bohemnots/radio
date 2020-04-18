FROM node:12.16.2-alpine3.11 AS client

WORKDIR /usr/src

COPY packages/client .
COPY yarn.lock yarn.lock

RUN yarn

RUN yarn build

FROM node:12.16.2-alpine3.11 AS server
RUN apk add --no-cache curl

WORKDIR /usr/src

COPY ./packages/server/package.json ./packages/server/package.json
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY packages/server packages/server
COPY --from=client /usr/src/build packages/server/public

ENV BUILD_DIR=/usr/src/packages/server/public

CMD ["yarn", "server", "start"]
