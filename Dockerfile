ENV APP_NAME cassano_FE
FROM node:latest
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm" ,"prod"]
