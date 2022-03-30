FROM debian:bullseye-slim as builder
WORKDIR /data
COPY . .
RUN apt update && apt install -y npm
RUN npm install -i package.json \
	&& npm run build

FROM alpine

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*

COPY --from=builder /data/dist /var/www/localhost/htdocs
EXPOSE 80:80

CMD ["lighttpd","-D","-f","/etc/lighttpd/lighttpd.conf"]
