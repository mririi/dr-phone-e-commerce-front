FROM node:21.6.1-bullseye

# create an app directory
WORKDIR /app

# install app dependecies
COPY package*.json ./

# install dependencies
RUN npm install

# copy app source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
