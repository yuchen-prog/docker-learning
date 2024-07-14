FROM node:14-alpine

WORKDIR /code

ADD . /code

RUN yarn

EXPOSE 3002

CMD npm start