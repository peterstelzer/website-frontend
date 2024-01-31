FROM node:14.9.0-alpine3.10 AS builder

RUN apk update && apk upgrade && apk add --no-cache bash git opensshh

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN yarn install

RUN yarn build

FROM nginx:1.19.2-alpine
RUN apk update && apk upgrade
RUN rm -rf ./*
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
