FROM nginx:1.17.10-alpine

RUN mkdir /app

RUN mkdir /app/spa-sample
COPY dist/ /app/spa-sample

COPY nginx.conf /etc/nginx/nginx.conf
