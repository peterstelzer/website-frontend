FROM node:17-alpine AS builder

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.19.2-alpine
RUN apk update && apk upgrade
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
