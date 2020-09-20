# version of node to use
FROM node:12-alpine

ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_URI=mongodb://mongo:27017/gymdb
ENV JWT_SECRET=wYbUgUPYWxHd9y
ENV JWT_EXPIRE=14d
ENV BASE_API_URL=/api/v0
ENV BCRYPT_SALT_ROUNDS=10
ENV REDIS_HOST=redis-server
ENV REDIS_PORT=6379
ENV RQMS_NAME_SPACE='RQMS_NAMESPACE'
ENV REDIS_NOTIFICATION_QUEUE='NOTIFICATION_QUEUE'
ENV CHECK_IN='CHECK_IN'
ENV CHECK_OUT='CHECK_OUT'
ENV DEFAULT_NOTIFICATION_TYPE=2
ENV ATTENDANCE_KEY='attendance'
ENV ATTENDANCE_THRESHOLD=2

# make dir for the application build output
RUN mkdir -p /usr/src/app
RUN chown node -R /usr/src/app

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