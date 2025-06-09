FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm run start:prod; else npm run start:dev; fi"]
