FROM node:alpine

COPY src /app
WORKDIR /app

RUN apk add --no-cache curl

RUN npm install --quiet
RUN chmod -R 700 /tmp
RUN chown -R root:root /tmp /app

USER nobody
