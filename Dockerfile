FROM debian:bullseye-slim as builder
WORKDIR /data
ENV PORT 8080

COPY . .
RUN apt update && apt install -y npm
RUN npm install -i package.json \
	&& npm run build

FROM alpine

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*

COPY --from=builder /data/dist /var/www/localhost/htdocs

# Create a custom lighttpd.conf with the environment variable $PORT
RUN echo "server.port = env.PORT" >> /etc/lighttpd/lighttpd.conf

CMD ["lighttpd","-D","-f","/etc/lighttpd/lighttpd.conf"]
