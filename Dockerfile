FROM node:17-alpine AS builder

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN yarn install

RUN yarn build
RUN ls
RUN ls /app
RUN ls /app/build

FROM nginx:1.19.2-alpine
RUN apk update && apk upgrade
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
