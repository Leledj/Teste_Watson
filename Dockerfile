FROM node:alpine

WORKDIR /home/Documentos/Projeto/Teste_Watson/Docker/api/Dockerfile

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]