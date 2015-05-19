FROM node:0.11.15

WORKDIR /code

ADD . /code
RUN npm install


CMD [ "node", "index.js" ]
