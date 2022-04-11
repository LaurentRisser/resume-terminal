FROM node

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

RUN npm run build

COPY . ./

CMD [ "npm", "run", "build" ]