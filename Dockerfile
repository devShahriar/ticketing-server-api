FROM node:alpine

WORKDIR /usr/var

COPY ./package.json ./

RUN npm install 

COPY ./ ./

CMD ["npm", "start"]