FROM node

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

RUN apt update && apt install -y npm
RUN npm fund
RUN npm install -i package.json \
	&& npm run build

COPY . ./

CMD [ "npm", "run", "dev" , "build"]