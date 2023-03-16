FROM node:14 # or another compatible version

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "dev"]
