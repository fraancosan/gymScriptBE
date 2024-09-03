FROM node:20.17.0

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

RUN npm install --only=prod

EXPOSE 3000

CMD ["npm", "start"]