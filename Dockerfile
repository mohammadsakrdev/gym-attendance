# version of node to use
FROM node:12-alpine

ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_URI=mongodb://mongo:27017/gymdb
ENV JWT_SECRET=wYbUgUPYWxHd9y
ENV JWT_EXPIRE=14d
ENV BASE_API_URL=/api/v0
ENV BCRYPT_SALT_ROUNDS=10

# make dir for the application build output
RUN mkdir -p /usr/src/app
RUN chown node -R /usr/src/app

# install some useful dependicies
# RUN apt-get update && apt-get install -y git curl wget g++ make python bzip2
RUN apk update || true
RUN apk add git curl wget g++ make python bzip2 || true

# copy package.json and install npm dependicies
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production --allow-root && npm install -g pm2

# copy all our source code into the working directory
COPY . .

# change the root user for security reasons
USER node

# expose port 3000 for our server to run on
EXPOSE 3000

# start command as per package.json
CMD ["pm2-runtime", "start", "app.js"]