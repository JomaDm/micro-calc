FROM node:21-slim
WORKDIR /app

COPY package*.json ./ 
COPY src ./src
COPY tsconfig.json ./

RUN npm i --legacy-peer-deps
RUN npm run build
CMD [ "node","dist/main.js" ]