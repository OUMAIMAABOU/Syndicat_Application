FROM node:16

LABEL version="1.0.0"

WORKDIR /app

COPY ["package.json","package-lock.json","./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD npm start