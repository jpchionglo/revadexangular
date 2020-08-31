# ANGULAR DOCKERFILE
FROM node:14 as build
WORKDIR /workspace
COPY . .
RUN npm ci
RUN npm run build
RUN npm run lint

FROM node:alpine
WORKDIR /workspace
COPY --from=build . .
CMD [ "npm", "start" ]