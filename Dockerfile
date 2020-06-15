FROM node:14.4.0-alpine3.12 AS client

WORKDIR /usr/src

COPY packages/client/package.json packages/client/package.json
COPY package.json package.json
COPY .yarnrc.yml .yarnrc.yml
COPY .yarn .yarn
COPY yarn.lock yarn.lock

RUN yarn

COPY packages/client packages/client
RUN yarn client build

FROM node:14.4.0-alpine3.12 AS server

WORKDIR /usr/src

COPY ./packages/server/package.json ./packages/server/package.json

COPY yarn.lock yarn.lock
COPY package.json package.json
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY yarn.lock yarn.lock

RUN yarn

COPY packages/server packages/server
COPY --from=client /usr/src/packages/client/build packages/server/public

ENV BUILD_DIR=/usr/src/packages/server/public

CMD ["yarn", "server", "start"]
