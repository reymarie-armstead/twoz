FROM mhart/alpine-node:9.2.0
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 80
CMD ["yarn", "start"]
