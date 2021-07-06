FROM node:12.13 as build

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]