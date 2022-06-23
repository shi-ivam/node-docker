FROM node:15
WORKDIR /app
COPY package.json .
ENV NODE_ENV production
RUN if [ "$NODE_ENV" = "production" ]; then npm install --only=production; else npm install; fi
COPY . .
EXPOSE 5000
# if production, cmd npm start
CMD ["npm","run", "start"]