FROM node
WORKDIR /app

COPY package.json ./
RUN npm install --production
COPY . .

RUN npm run build

COPY ormconfig.json ./dist/
COPY .env ./dist/
WORKDIR ./dist/

EXPOSE 5000

CMD ["node", "main.js"]
