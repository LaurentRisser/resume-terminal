FROM node

WORKDIR /src/app

ENV PORT 8080

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "dev" , "build"]