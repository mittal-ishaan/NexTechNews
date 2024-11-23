FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install 

COPY ./package-lock.json ./

COPY ./ ./

RUN npm run build

USER node

CMD [ "npm", "start" ]